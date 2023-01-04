import { useState } from "react";
import axios from "axios";

export function Admin() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [link, setlink] = useState("");
  const [sginedIn, setSign] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [selection, setSelection] = useState(null);
  const [list, setList] = useState([]);

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("discription", discription);
    formData.append("link", link);

    try {
      await axios.post(
        `https://al-sharief-server-akqk.onrender.com/api/${selection}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      await onSelection(selection);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://al-sharief-server-akqk.onrender.com/api/user",
        {
          username: user,
          password: password,
        }
      );
      if (res) {
        setSign(true);
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  const onSelection = async (value) => {
    try {
      let res = await fetch(
        `https://al-sharief-server-akqk.onrender.com/api/${value}`
      );
      let json = await res.json();
      setList(json);
      console.log(list);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else console.error(err);
    }
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <div className="body-main-div">
      {!sginedIn ? (
        <section>
          <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
      ) : (
        <>
          <section className="selection">
            <label>Choose what to change :</label>
            <select
              name="data"
              id="data"
              onChange={async (event) => {
                setSelection(event.target.value);
                await onSelection(event.target.value);
              }}
            >
              <option value={null} selected disabled hidden>
                Select an Option
              </option>
              <option value="carousle">home page slider</option>
              <option value="partners">Partners</option>
              <option value="clients">Clients</option>
              <option value="news">News</option>
              <optgroup label="Products">
                <option value="life">Life Science</option>
                <option value="pcb">Pcb testing</option>
                <option value="restoration">
                  Restoration and Preservation
                </option>
                <option value="enviromental">Enviromental Equipment</option>
                <option value="education">Educational experiments</option>
                <option value="supplies">lab supplies</option>
                <option value="material">Matrial testing</option>
              </optgroup>
            </select>
          </section>
          {selection !== null ? (
            <section className="sign-in">
              <form
                className="sign-in-form"
                onSubmit={submit}
                style={{ width: 650 }}
              >
                <div className="main-part">
                  <h1>to add</h1>
                  <div>
                    <div className="sub-part">
                      <label className="label" htmlFor="image">
                        {" "}
                        Image:
                      </label>
                      <input
                        id="image"
                        onChange={fileSelected}
                        type="file"
                        accept="image/*"
                      ></input>
                    </div>
                    <div className="sub-part">
                      <label htmlFor="title" className="label">
                        {" "}
                        Title:
                      </label>
                      <input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="title"
                      ></input>
                    </div>
                    {selection === "carousle" ||
                    selection === "partners" ||
                    selection === "clients" ? (
                      <></>
                    ) : (
                      <div className="sub-part">
                        <label htmlFor="discription" className="label">
                          {" "}
                          Discription:
                        </label>
                        <textarea
                          id="discription"
                          value={discription}
                          onChange={(e) => setDiscription(e.target.value)}
                          placeholder="discription"
                        ></textarea>
                      </div>
                    )}
                    {selection === "clients" ||
                    selection === "news" ||
                    selection === "carousle" ? (
                      <></>
                    ) : (
                      <div className="sub-part">
                        <label htmlFor="link" className="label">
                          {" "}
                          Link:
                        </label>
                        <input
                          id="link"
                          value={link}
                          onChange={(e) => setlink(e.target.value)}
                          type="text"
                          placeholder="url"
                        ></input>
                      </div>
                    )}
                  </div>
                  <button className="sub-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
              <section>
                <h2> list</h2>
                <div>
                  {list.map((item) => {
                    return (
                      <div className="item">
                        <h2>{item.title}</h2>
                        {item.discription ? (
                          <p>Discription : {item.discription}</p>
                        ) : (
                          <></>
                        )}
                        {item.url ? <p>{item.url}</p> : <></>}
                        <h3>image link:</h3>
                        <p>
                          <a href={item.src}>link</a>
                        </p>
                        <button
                          onClick={async () => {
                            await axios.delete(
                              `https://al-sharief-server-akqk.onrender.com/api/${selection}/${item._id}`
                            );
                            await onSelection(selection);
                          }}
                        >
                          delete
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            </section>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

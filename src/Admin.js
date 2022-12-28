import { useState } from "react";
import axios from "axios";

export function Admin() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
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
    <>
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
          <section>
            <label>Choose what to change :</label>
            <select
              name="data"
              id="data"
              onChange={async (event) => {
                setSelection(event.target.value);
                await onSelection(event.target.value);
              }}
            >
              <option value={null}>...</option>
              <option value="carousle">home page slider</option>
              <option value="partners">Partners</option>
              <option value="clients">Clients</option>
              <option value="news">News</option>
            </select>
          </section>
          <section className="flex flex-col items-center justify-center">
            <form
              onSubmit={submit}
              style={{ width: 650 }}
              className="flex flex-col space-y-5 px-5 py-14"
            >
              <h1>to add</h1>
              <input
                onChange={fileSelected}
                type="file"
                accept="image/*"
              ></input>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="title"
              ></input>
              {selection === "clients" ? (
                <></>
              ) : selection === "partners" ? (
                <input
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                  type="text"
                  placeholder="url"
                ></input>
              ) : (
                <input
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                  type="text"
                  placeholder="discription"
                ></input>
              )}

              <button type="submit">Submit</button>
            </form>
            <section>
              <h2> list</h2>
              <div>
                {list.map((item) => {
                  return (
                    <div>
                      <h2>{item.title}</h2>
                      {item.discription ? <p>{item.discription}</p> : <></>}
                      {item.url ? <p>{item.url}</p> : <></>}
                      <h3>image link:</h3>
                      <p>
                        <a>{item.src}</a>
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
        </>
      )}
    </>
  );
}

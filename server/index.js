import express from "express";
import "dotenv/config";
import path from "path";
import cors from "cors";
import { errorController } from "./controller/errorController.js";
import mongodb from "./config/db.js";
import { chatRouter, router } from "./routes/router.js";
import { createServer } from "http";
import { Server } from "socket.io";
// import apicache from "apicache";

const app = express();
// let cache = apicache.middleware;
// app.use(cache("5 minutes"));
const __dirname = path.resolve();

// process.on("uncaughtException", (err) => {
//   console.log("SHUTTING DOWN ");
//   console.log(err.name, err.message);
//   process.exit(1);
// });
// {
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
//     // credentials: true,
//   }
app.use(cors());

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/jms/app/v1/user", router);
app.use("/jms/app/v1/chat", chatRouter);

app.get("/", (req, res) => {
  res.json("Hello from jms server");
});

app.all("*", (req, res, next) => {
  res.status(200).json({ message: `${req.originalUrl} is Invalid url` });
  next();
});
app.use(errorController);

mongodb()
  .then(() => {
    // const server = app.listen(process.env.PORT, (err) => {
    //   if (err) console.log(err);
    //   console.log("JMS server connected on port", process.env.PORT);
    // });
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
      cors: {
        origin: "*",
      },
    });

    let users = [];
    const addUser = (user, ids) => {
      if (users.length === 0) {
        users.push({ name: user, id: ids });
      } else {
        users.map((el) => {
          if (el.name === user) {
            el.id = ids;
          } else {
            users.push({ name: user, id: ids });
          }

          let duplicate = [];
          let isDuplicate = false;
          users = users.filter((el) => {
            isDuplicate = duplicate.includes(el.name);
            if (!isDuplicate) {
              duplicate.push(el.name);
              return true;
            } else {
              return false;
            }
          });
          return users;
        });
      }

      // console.log(users, "addd");
    };

    const removeUser = (ids) => {
      users = users.filter((el) => el.id !== ids);

      let duplicate = [];
      let isDuplicate = false;
      users = users.filter((el) => {
        isDuplicate = duplicate.includes(el.name);
        if (!isDuplicate) {
          duplicate.push(el.name);
          return true;
        } else {
          return false;
        }
      });
      // console.log(users, "filterdd");
      return users;
    };

    io.on("connection", (socket) => {
      //video ##################################################
      socket.emit("me", socket.id);

      socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
      });

      socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("callUser", {
          signal: data.signalData,
          from: data.from,
          name: data.name,
        });
      });

      socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal);
      });
      //########################################################
      //user connected
      socket.on("connect-user", (user) => {
        if (user !== "") {
          addUser(user, socket.id);
          io.emit(
            "aaa",
            users.map((u) => u.name)
          );
        }
      });

      //user disconnected
      socket.on("disconnect", () => {
        removeUser(socket.id);
        // console.log(users, "online disconnected");
        io.emit(
          "aaa",
          users.map((u) => u.name)
        );
      });

      //send message for rooms
      socket.on("aa", (messages, room) => {
        // console.log(room1, room2, "rooms");
        socket.join(room);
        socket.to(room).emit("bb", messages);
        // socket.join([room1, room2]);
        // socket.to(room1).to(room2).emit("bb", messages);
      });

      //typing indicator on
      socket.on("typing t", (bool, room) => {
        socket.join(room);
        socket.broadcast.to(room).emit("typing true", bool);
      });

      //typing indicator off
      socket.on("typing f", (bool, room) => {
        socket.join(room);
        socket.broadcast.to(room).emit("typing false", bool);
      });

      socket.on("sen aaaa", (val) => {
        io.emit("rec aaaa", val);
      });

      socket.on("sen bbbb", (val) => {
        io.emit("rec bbbb", val);
      });

      socket.on("sen dddd", (val) => {
        io.emit("rec dddd", val);
      });

      socket.on("a1", (val) => {
        io.emit("a2", val);
      });

      socket.on("bb1", (val) => {
        io.emit("bb2", val);
      });

      socket.on("cc1", (val) => {
        io.emit("cc2", val);
      });

      socket.on("ff1", (val) => {
        io.emit("ff2", val);
      });
    });

    httpServer.listen(5000, (err) => {
      if (err) {
        console.log("something went wrong server not connected");
      }
      console.log("server connected on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// process.on("unhandledRejection", (err) => {
//   console.log("SHUTTING DOWN");
//   console.log(err.message, err.name);
//   server.close(() => {
//     process.exit(1);
//   });
// });

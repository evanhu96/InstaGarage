const connection = require("../config/connection");
const { Component } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
    const tag = "VertNav"
    const file = 
    ``
    const component = new Component({
        tag: tag,
        file: file,
      });
      await component.save();
      return component;
    }
)
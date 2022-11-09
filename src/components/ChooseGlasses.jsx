import React, { Component } from "react";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class ChooseGlasses extends Component {
  state = {
    glasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderButton = () => {
    const arrData = data.map((item, index) => {
      return (
        <button>
          <img
            src={item.url}
            key={index}
            onClick={() => {
              this.viewDetail(item);
            }}
          />
        </button>
      );
    });
    return arrData;
  };

  viewDetail = (glassesClick) => {
    this.setState({
        glasses: glassesClick
    })
  };

  render() {
    const {name,url,desc} = this.state.glasses;
    return (
      <div className="choose-glasses">
        <div className="header bg-dark text-center p-5 text-white">
          <h1>TRY GLASSES APP ONLINE</h1>
        </div>
        <div className="container row m-auto my-4 bg-transparent">
          <div className="col-6">
            <div className="img-box d-flex justify-content-center position-relative">
              <img
                className="position-relative"
                src="./glassesImage/model.jpg"
                height="300"
              />
              <img
                className="item-glasses"
                src={url}
                width="130"
              />
              <div className="detail">
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="img-box d-flex justify-content-center">
              <img src="./glassesImage/model.jpg" height="300" />
            </div>
          </div>
        </div>
        <div className="container button-grid mt-5 p-5 bg-light">
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

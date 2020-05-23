import React from "react";
import App from "next/app";
import "../styles/tailwind.css";
import "../styles/semantic.css.scss";

export default class TailwindApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

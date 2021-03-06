import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import logoDS from "../../../resources/Página Web/iconos/logoblanco.png";
import danielPerfil from "../../../resources/perfildaniel.png";
import nombreDS from "../../../resources/nombreDS.png";
import logoRojo from "../../../resources/logorojo.png";
import $ from "jquery";
import Footer from "../Footer/Footer";
import ScrollDown from "../scrollDown";
import ScrollUp from "../scrollUp";

import facebookR from "../../../resources/facebook_rojo.png";
import twitterR from "../../../resources/twitter_rojo.png";
import instagramR from "../../../resources/instagram_rojo.png";
import youtubeR from "../../../resources/youtube_rojo.png";

export default class Trayectoria extends Component {
  state = {
    trayData: {},
    mediaData: {}
  }

  componentDidMount = () => {
    $(".navbar_morena").addClass("nvocolor_rojo");
    $(".navbar_morena img").attr("src", logoRojo);
    $('#contacto').css('color', '#941725');
    $('#menu_navbar').css('color', '#941725');

    $("#facebookDS").attr("src", facebookR);
    $("#twitterDS").attr("src", twitterR);
    $("#instaDS").attr("src", instagramR);
    $("#ytDS").attr("src", youtubeR);

    $("#footer_morena").css("background-color", "#cdcdcd9c");
    $("#footer_morena").css("box-shadow", "0px -2px 7px -3px grey");

    fetch(`http://laravel.danielserrano.com.mx/public/api/trayectoria`)
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON.trayectoria);
        this.setState({ trayData: responseJSON.trayectoria })
      })
      .catch(err => {
        console.log(err);
      });
    fetch(`http://laravel.danielserrano.com.mx/public/api/content`)
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON.Content);
        this.setState({
          mediaData: responseJSON.Content[responseJSON.Content.length - 1]
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.state.trayData.length)
    return (
      <div>
        <Navbar active={false}></Navbar>
        {/* <div className="cont-vid bg_perfilDaniel topnv">
          <div className="w-100 h-100 degradado" style={{ position: "absolute", }} >
            <div className="ds_logo_trayectoria">
              <img className="w-100 h-100 img-contain" src={logoDS}></img>
            </div>
          </div>
        </div> */}
        <div className="row pt-5 mx-0 my-5 position-relative">
          <ScrollUp selector='#scrollTrayectoria'></ScrollUp>
          <div id='scrollTrayectoria' className="col-md-6 px-5 mb-5 scroll_customy" style={{ textAlign: "justify", maxHeight: '26rem', overflow: 'auto', minHeight: '25rem' }}>
            <div className="row">
              <div className="col-12 morena_red">
                <img alt="Daniel Serrano" className="w-75 p-3" src={nombreDS} ></img>
              </div>
            </div>
            {/*  */}

            {this.state.trayData.length !== undefined ? (
              this.state.trayData.map((trayectoria) =>
                trayectoria.status === 1 ? (
                  <div key={trayectoria.id} className="row">
                    <div className="col-2 morena_red px-0"> {trayectoria.year_ini}-{trayectoria.year_fin} </div>
                    <div className="col-10">
                      {trayectoria.descripcion}
                    </div>
                  </div>
                ) : (null)
              )
            ) : (null)
            }
            {/* 27 */}
          </div>
          <ScrollDown selector='#scrollTrayectoria'></ScrollDown>
          <div className="col-md-6 bg_trayectoriaDS"></div>
        </div>

        <div className="my-5 px-5" style={{ height: '80vh' }}>
          <div className="row mx-0 mb-4">
            <div className="col-12 px-0">
              <h1 className="morena_red">GALERIA</h1>
            </div>
          </div>
          <div className="row mx-0 mb-5">
            <div className='col-md-9 col-12 bg-danger px-0'>
              <a target='_blank' href={`${this.state.mediaData.video_trayectoria !== undefined ? (this.state.mediaData.video_trayectoria) : (null)}`}>
                <div className="w-100 bg-danger cursor_pointer" style={{ height: "26rem", backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(https://img.youtube.com/vi/${this.state.mediaData.video_trayectoria !== undefined ? (this.state.mediaData.video_trayectoria.split("=")[1].split('&')[0]) : ("")}/maxresdefault.jpg)`, boxShadow: '0px 0px 5px 0px gray' }} >
                </div>
              </a>
            </div>
            <div className="col-md-3 col-12 px-0 px-md-3 mt-2 mt-md-0" style={{ height: "26rem" }} >
              <div className="row mx-0 h-50 pb-2 pl-2">
                <div className="col-12 bg-danger cursor_pointer" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${this.state.mediaData.img_trayectoria_one})`, boxShadow: '0px 0px 5px 0px gray' }}>{/* aa */}</div>
              </div>
              <div className="row mx-0 h-50 pt-2 pl-2">
                <div className="col-12 bg-danger cursor_pointer" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${this.state.mediaData.img_trayectoria_two})`, boxShadow: '0px 0px 5px 0px gray' }}>
                  {/* bb */}
                </div>
              </div>
            </div>
          </div>
        </div >
        <Footer></Footer>
      </div >
    );
  }
}

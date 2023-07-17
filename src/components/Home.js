import 'D:\\samyog-website\\samyog-backup\\src\\App.css';
import Plx from "react-plx";
import React from 'react'
export default function Home() {
  
  return (
    <div className="main-home">
   {/* main background */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          // position: "fixed",
          // left: 0,
          paddingTop: "40px",
          width: "100%"
        }}
      >
        <img style={{width: "100%"}} src="bg6.png" alt="background" />
      </Plx>

       {/* foreground-1 */}
       <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 2.5,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          paddingTop: "50px",
          width: "100%",
        }}
      >
        <img style={{ width: "100%" }} src="fg1Out1.png" alt="foreground" />
    </Plx>

{/* foreground-Inner up */}
    <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-out",
            properties: [
              {
                startValue: 1,
                endValue: 2.5,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="fgMo.png" alt="foreground" />
      </Plx>

     {/* foreground-Inner */}
     <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-out",
            properties: [
              {
                startValue: 1,
                endValue: 2.5,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          paddingTop: "0px",
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="fgIn1.png" alt="foreground" />
      </Plx>

       {/* text-samyog */}
       <Plx
        parallaxData={[
          {
            start: 0,
            end: 950,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          right: 10,
          top: "6vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "35vw"
          }}
          src="/text-img2.png"
          alt="Goonies"
        />
      </Plx>
    </div>
  )
}

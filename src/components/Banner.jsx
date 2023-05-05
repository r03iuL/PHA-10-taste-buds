import React from "react";

function Banner() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        padding: "50px 0",
        color: "#fff",
        textAlign: "center",
        margin: "0 auto",
        
        
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "8rem",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "20px",
            padding : "8rem 0",
            color: "yellow"

          }}
        >
          O &nbsp; R &nbsp; G &nbsp; A &nbsp; N &nbsp; I &nbsp; C  &nbsp;&nbsp; & &nbsp;&nbsp;  N &nbsp; A &nbsp; T &nbsp; U&nbsp;  R &nbsp; A &nbsp; L <br /> F &nbsp; O &nbsp; O &nbsp; D  
        </h2>
        <p
          style={{
            fontSize: "25px",
            lineHeight: "1.5",
            
          }}
        >
          Welcome to TasteBuds Banner, the ultimate destination for food lovers and adventurous eaters! Our mission is to tantalize your taste buds with the most unique and delicious flavors from around the world. Whether you're a seasoned foodie or simply love to explore new cuisines, we've got something for everyone. So come on in and join us on a culinary journey of a lifetime!!!!
        </p>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 30px 0;
          }

          h2 {
            font-size: 24px;
            margin-bottom: 10px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}

export default Banner;

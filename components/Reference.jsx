import Image from "next/image";
import React from "react";

const Reference = () => {
  return (
    <div className="container">
      <h3>Reference</h3>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <Image
              src="https://i.postimg.cc/kgLCFRLk/Richard.jpg"
              width={100}
              height={100}
              alt="refernce image"
              className="refernce-image"
            />
          </div>
          <div className="card-content">
            <h4>WOW</h4>
            <p>Grabben är bätte än mig.</p>
            <p>- Kalk Rikkardson</p>
          </div>
        </div>
        <div className="card">
          <Image
            src="https://i.postimg.cc/kgLCFRLk/Richard.jpg"
            width={1000}
            height={1000}
            alt="refernce image"
            className="refernce-image"
          />
          <div className="card-content">
            <h4>Anställningsbar!</h4>
            <p>En mycket unik och härlig elev.</p>
            <p>- Richard Chalk</p>
          </div>
        </div>
        <div className="card">
          <Image
            src="https://i.postimg.cc/kgLCFRLk/Richard.jpg"
            width={1000}
            height={1000}
            alt="refernce image"
            className="refernce-image"
          />
          <div className="card-content">
            <h4>Excellenta inlämningar!</h4>
            <p>
              Inlämningarna är avsedda som en möjlighet att visa allt ni kan…
              och det har du gjort! Excellenta inlämningar!
            </p>
            <p>- Rikkard Kalk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;

//footer area
import React from "react";


export default function Footer(props){


    return (<>
 <div id="footer" className="text-muted">
  <footer className="container p-4 rounded">
      <div className="d-lg-flex justify-content-between">
        <div>
          <span></span>
        </div>
        <div className="copyright">
          <p>You can follow me on <a href="https://github.com/arifulthejedi">GitHub</a>  😀</p>
        </div>
        <div>
          <ul className="d-flex gap-3 list-unstyled">
            <li><a href="https://www.facebook.com/CyberPwn77"><i className="bi bi-facebook"></i></a></li>
            <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
            <li><a href="https://github.com/arifulthejedi"><i className="bi bi-github"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
</div>   
    </>);
}
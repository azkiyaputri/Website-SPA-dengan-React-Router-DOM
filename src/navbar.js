import React from 'react'
import { Link } from 'react-router-dom'

class navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand text-white" href="#">ReactRouter</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/" className="nav-link text-white">Beranda</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/data" className="nav-link text-white">Data</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/protokol" className="nav-link text-white">Protokol</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default navbar;
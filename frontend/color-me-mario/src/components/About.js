import React, { Component } from 'react'
import Reason from './Reason'

export default class About extends Component {
    render() {
        return (
            <>
            <Reason/>
            <div className="text-light px-5 fs-5">
                <p>
                The repo for this project is <a className="link-light" href="https://github.com/42gmh/capstone-project" target="_blank">here</a>.
                </p>
                <p>
                Here is a breakdown of the technologies used:
                </p>
                <ul>
                    <li className="py-1">HTML/CSS/Javascript - This is the mirepoix of web development and underpins everything else.</li>
                    <li className="py-1">
                        <a className="link-light" target="_blank"
                        href="http://expressjs.com/">Express</a> - The backend is implemented asan Express server. This exposes the web endpoints used by the GUI to CRUD data.</li>
                    <li className="py-1">Node.js - This is the backend Javscript VM used to run the Express server.</li>
                    <li className="py-1">bcrypt - This is used for password management/hashing.</li>
                    <li className="py-1">PostresSQL - This is the SQL database used to store users and their albums.</li>
                    <li className="py-1">Sequelize - This is the ORM used to model the objects and perform the CRUD oprerations.</li>
                    <li className="py-1">
                        <a className="link-light" targer="_blank"
                        href="https://jwt.io/">JWT</a> - JSON Web Tokens is used to store a session cookie upon user login.</li>
                    <li className="py-1">React - The GUI is a Single Page Application using React to support the flow.</li>
                    <li className="py-1">React Context - This is how state is managed across pages in the app.</li>
                    <li className="py-1">Bootstrap - This is used to provide help with styling concerns.</li>
                    <li className="py-1">AWS - The app is hosted an an Amazon Wed Services EC2 instance.</li>
                    <li className="py-1">Nginx - The app is served up by Nginx.</li>
                    <li className="py-1">PM2 - The backend lifecyle is managed via PM2.</li>
                    <li className="py-1">
                        <a className="link-light" target="_blank" 
                        href="https://certbot.eff.org/">certbot</a> - The EFF's cerbot is providing the HTTPS certificate management.</li>
                </ul>
            </div>
            </>
        )
    }
}

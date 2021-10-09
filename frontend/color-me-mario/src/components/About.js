import React, { Component } from 'react'
import AboutListItem from './AboutListItem'
import Reason from './Reason'

export default class About extends Component {
    render() {
        return (
            <>
            <Reason/>
            <div className="text-light px-5 fs-5">
                <p>
                The repo for this project is <a className="link-light" href="https://github.com/42gmh/capstone-project" target="_blank" rel="noreferrer">here</a>.
                </p>
                <p>
                Here is a breakdown of the technologies used:
                </p>
                <ul>
                    <AboutListItem name="HTML/CSS/Javascript" url={null}
                                   summary="This is the mirepoix of web development and underpins everything else."/>
                    <AboutListItem name="Express" url="http://expressjs.com/" 
                                   summary="The backend is implemented asan Express server. This exposes the web endpoints used by the GUI to CRUD data."/>
                    <AboutListItem name="Node" url="https://nodejs.org/en/"  
                                   summary="This is the backend Javscript VM used to run the Express server"/>
                    <AboutListItem name="bcrypt" url="https://www.npmjs.com/package/bcrypt"  
                                   summary="This is used for password management/hashing."/>
                    <AboutListItem name="PostresSQL" url="https://www.postgresql.org/"  
                                   summary="This is the SQL database used to store users and their albums."/>
                    <AboutListItem name="Sequelize" url="https://sequelize.org/"  
                                   summary="This is the ORM used to model the objects and perform the CRUD oprerations."/>
                    <AboutListItem name="JWT" url="https://jwt.io/"  
                                   summary="JSON Web Tokens is used to store a session cookie upon user login."/>
                    <AboutListItem name="React" url="https://reactjs.org/"
                                   summary="The GUI is a Single Page Application using React to support the flow."/>
                    <AboutListItem name="React Context" url="https://reactjs.org/docs/context.html"
                                   summary="This is how state is managed across pages in the app."/>
                    <AboutListItem name="Bootstrap" url="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                                   summary="This is used to provide help with styling concerns."/>
                    <AboutListItem name="AWS" url="https://aws.amazon.com/"
                                   summary="The app is hosted an an Amazon Wed Services EC2 instance."/>
                    <AboutListItem name="Nginx" url="https://www.nginx.com/"
                                   summary="The app is served up by Nginx."/>
                    <AboutListItem name="PM2" url="https://pm2.keymetrics.io/"
                                   summary="The backend process lifecyle is managed via PM2."/>
                    <AboutListItem name="certbot" url="https://certbot.eff.org/"
                                   summary="The EFF's cerbot is providing the HTTPS certificate management."/>
                </ul>
            </div>
            </>
        )
    }
}

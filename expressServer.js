const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','arxiki.html')));
			this.app.get('/arxiki', (req, res) => res.sendFile(path.join(__dirname,'html','arxiki.html')));
			this.app.get('/arxiki/:id', (req, res) => res.sendFile(path.join(__dirname,'html','arxiki.html')));
			this.app.get('/Sing_up', (req, res) => res.sendFile(path.join(__dirname,'html','Sing_up.html')));
			this.app.get('/Sing_up/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Sing_up.html')));
			this.app.get('/user_details', (req, res) => res.sendFile(path.join(__dirname,'html','user_details.html')));
			this.app.get('/user_details/:id', (req, res) => res.sendFile(path.join(__dirname,'html','user_details.html')));
			this.app.get('/Passenger_profile', (req, res) => res.sendFile(path.join(__dirname,'html','Passenger_profile.html')));
			this.app.get('/Passenger_profile/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Passenger_profile.html')));
			this.app.get('/Driver_profile', (req, res) => res.sendFile(path.join(__dirname,'html','Driver_profile.html')));
			this.app.get('/Driver_profile/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Driver_profile.html')));
			this.app.get('/Payment', (req, res) => res.sendFile(path.join(__dirname,'html','Payment.html')));
			this.app.get('/Payment/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Payment.html')));
			this.app.get('/Publish_your_ride', (req, res) => res.sendFile(path.join(__dirname,'html','Publish_your_ride.html')));
			this.app.get('/Publish_your_ride/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Publish_your_ride.html')));
			this.app.get('/Find_your_ride', (req, res) => res.sendFile(path.join(__dirname,'html','Find_your_ride.html')));
			this.app.get('/Find_your_ride/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Find_your_ride.html')));
			this.app.get('/Who_we_are', (req, res) => res.sendFile(path.join(__dirname,'html','Who_we_are.html')));
			this.app.get('/Who_we_are/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Who_we_are.html')));
			this.app.get('/How_it_works', (req, res) => res.sendFile(path.join(__dirname,'html','How_it_works.html')));
			this.app.get('/How_it_works/:id', (req, res) => res.sendFile(path.join(__dirname,'html','How_it_works.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';
import './index.css';


class Midsec extends React.Component {
  render() {
    const status = 'Next player: X';
    /*** draw months ***/ 
		  var month = moment();
		  var outputMonth = "<ol class = 'month'>";
		  for (var i = 0; i < 12; i++) {
		    var durationMonth = moment.duration({'months' : 1});
		    outputMonth += "<li>";
		    outputMonth += moment(month).format("MMM");
		    outputMonth += "</li>";
		    month = moment(month).subtract(durationMonth);
		  }
		  outputMonth += "</ol>";
		  
		  var output = "<ol><div class = 'week'>";
		  var day = moment();
		  
		  /* Calculate the offset for days of the week to line up correctly */
		  var dayOfWeekOffset = 6 - (parseInt(moment().format("d"),10));
		  for (i = 0; i < (dayOfWeekOffset); i++) { output += "<li class = 'offset'></li>"; }
		  
		  /*** draw calendar ***/
		  
		  for (i = 365; i >= 0; i--) {
		    output += "<li>";
		    output += '<span class = "tooltip">' + moment(day).format("MM-DD-YY")  +  '</span>';
		    output += "</li>";
		    
		    var duration = moment.duration({'days' : 1});
		    day = moment(day).subtract(duration);
		  }
		  
		  output += "</div></ol>";
    return (
      		<div className="status">					
      			<ul className="nav nav-tabs ">
					<li className="active">
						<a href="#tab_default_1" data-toggle="tab">
						Overview </a>
					</li>
					<li>
						<a href="#tab_default_2" data-toggle="tab">
						Repositories </a>
					</li>
					<li>
						<a href="#tab_default_3" data-toggle="tab">
						Stars </a>
					</li>
					<li>
						<a href="#tab_default_3" data-toggle="tab">
						Followers </a>
					</li>
					<li>
						<a href="#tab_default_3" data-toggle="tab">
						Following </a>
					</li>
				</ul>
				<div id="tab_default_1">
					<div className="headings">
						<span>Popular Repositories</span>
						<a className="pull-right pinned-repos-setting-link">Customize your pinned repositories</a>
					</div>
					<div className="card">
					  <div className="card-block">
					  	<Router>
					    	<h4 className="card-title">
					    	<Link to='/listpage' replace="true">Homelike-assgn</Link>
					    	</h4>
					    </Router>
					    <p className="card-text">Forked from <a href="#" className="card-link">google/my-repo</a></p>
					    <span>Click here to open repository detail page</span>
					  </div>
					  <div className="card-block">
					    <h4 className="card-title"><a>My Repository</a></h4>
					    <p className="card-text">Forked from <a href="#" className="card-link">google/material-design-lite</a></p>
					    <span>Description goes here</span>
					  </div>
					  <div className="card-block">
					    <h4 className="card-title"><a>Android-game</a></h4>
					    <p className="card-text">Forked from <a href="#" className="card-link">google/material-design-lite</a></p>
					    <span>Description goes here</span>
					  </div>
					  <div className="card-block">
					    <h4 className="card-title"><a>react-sample</a></h4>
					    <p className="card-text">Forked from <a href="#" className="card-link">google/material-design-lite</a></p>
					    <span>Description goes here</span>
					  </div>
					</div>
					<h5 className="Contribution">Contribution in last year</h5>
					<div className = "activity-chart">
				    <ol className = "days-of-week">
				      <li>Mon</li>
				      <li>Wed</li>
				      <li>Fri</li>
				    </ol>
					  <div id ="month" className ="month" dangerouslySetInnerHTML={{ __html: outputMonth }} ></div>
					  <div id = "days" className = "days" dangerouslySetInnerHTML={{ __html: output }} ></div>
					  <div className = "key">
					  <span>Less</span>
					  <ul>
					    <li className = "activity-four"></li>
					    <li className = "activity-three"></li>
					    <li className = "activity-two"></li>
					    <li className = "activity"></li>
					    <li className = "day-key"></li>
					  </ul>
					  <span>More</span>
					  </div>
					</div>
				</div>
			</div>
    );
  }
}
const avatar = require("./avatar.png");
const Profile = () => (
      <div className="git">
      	<Header></Header>
        <div className="git-board row">
        	<div className="col-md-3">
        		<img src={avatar}/>
        		<div className="js-user-profile">
						  <h1 className="vcard-names">
						    <span className="vcard-fullname d-block">Samuel</span>
						    <span className="vcard-username d-block">Samuel Ajalode</span>
						  </h1>
						</div>
        	</div>
        	<div className="col-lg-9">
        		<Midsec />
        	</div>

        </div>
        <Footer></Footer>
      </div>
    )
class Midseclist extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      // toggle button is closed initially
      opened: false,
    };
    // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    this.editdesc = this.editdesc.bind(this);
  }

fetchData = () => {
  fetch("https://github.com/samuelajalode",
  {
    method: "PUT",
    dataType: "JSON",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((resp) => {
    console.log(resp);
  }) 
  .catch((error) => {
    console.log(error, "catch the hoop")
  })
}

editdesc = () => {
	const { opened } = this.state;
	this.setState({
      // toggle value of `opened`
      opened: !opened,
    });
	fetch("https://github.com/samuelajalode",{
		method:"PUT",
		headers: {
			"Accept": "application/vnd.github.v3+json",
			"Content-Type": "application/json"
		},
		body: {
			"names":['API']
		}
	}).then(function(response){

	})
}

savethis = () => {
	const { opened } = this.state;
	this.setState({
      // toggle value of `opened`
      opened: !opened,
   });
}
  render() {
  	const { opened } = this.state;
  	return (
  		<div className="listpage">
  			<div className="git-board row col-lg-10">
		  		<div className="pagerepohead">
		  			<h1 className="col-lg-10">
		  				<svg className="" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
		  				<span className="author"><a href="/RiddhiVerma" rel="author">YoungStudios</a></span>
		  				<span className="path-divider">/</span>
		  				<strong><a href="#">github-profilepage</a></strong>
		  			</h1>
		  			<ul>
		  				<li className="actions">
		  				<div className="star">
			  				<button type="submit" className="btn btn-sm btn-with-count js-toggler-target" aria-label="Star this repository" title="Star RiddhiVerma/projectsearch" data-ga-click="Repository, click star button, action:files#disambiguate; text:Star" onClick={this.fetchData}>
	        				<svg aria-hidden="true" className="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
	        				Star
	      					</button> 
	      					<a className="social-count" href="">0</a>
      					</div>
      					<div className="unstar hide">
			  				<button type="submit" className="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar RiddhiVerma/Homelike-assgn" data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
	        				<svg aria-hidden="true" className="" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
	        				Unstar
	      					</button>
	      					<a className="social-count" href="">0</a>
	      				</div>
      					</li>
		  			</ul>
		  		</div>
		  		<div className="repo-content">
		  			{!opened && (
			  			<div className="repository-meta-content">
	          		<span className="col-11 text-gray-dark"> No description to show</span>
	          		<span><a href="http://myUrl" rel="nofollow">MY URL</a></span>
	          		<button type="button" className="btn edit-btn" onClick={this.editdesc}>Edit</button>
	    				</div>
	    				
    				)}
    				
    				{opened && (
	    				<div className="detail">
				  			<div className="field">
					        <label htmlFor="repo_description">Description</label>
					        <input type="text" id="repo_description" className="form-control" name="repo_description" value="" placeholder="Short description of this repository" />
					      </div>
				        <div className="field">
				          <label htmlFor="repo_website">Website</label>
				          <input type="text" id="repo_website" className="form-control" name="repo_website" value="" placeholder="Website for this repository (optional)" />
				        </div>
				        <a onClick={this.savethis}> Save </a>
				      </div>
				      
			      )}
		        <div className="commit-tease">
    					<span className="pull-right">Latest commit
      						<a className="commit-tease-sha" href="#">23abd1 on 27 Dec 2017</a>
    					</span>
	      				<div className="d-flex no-wrap">
	        				<div className="AvatarStack flex-self-start ">
		  							<div className="AvatarStack-body" aria-label="RiddhiVerma">
								      <a href="/RiddhiVerma" className="avatar">
								        <img src="https://avatars3.githubusercontent.com/u/13232604?s=40&amp;v=4" width="20" height="20" alt="@RiddhiVerma" />
								      </a>
							        <div className="f6">
		      								</div>
		  							</div>
									</div>
	      				</div>
	      			</div>
	      				<div>
      					<table className="listtable">
      						<tbody>
      						<tr className="js-navigation-item navigation-focus">
					          <td className="icon">
					            <svg aria-hidden="true" className="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14">
					            	<path fillRule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path>
					            </svg>
					          </td>
					          <td className="content">
					            <span className="css-truncate css-truncate-target">
					            	<a href="/" className="js-navigation-open" id="6363" title="assets">assets</a>
					            </span>
					          </td>
					          <td className="message">
					            <span className="css-truncate css-truncate-target">
					              <a href="/" className="message" title="another commit">another commit</a>
					            </span>
					          </td>
					          <td className="age">
					            <span className="css-truncate css-truncate-target"><time-ago datetime="2017-12-27T12:14:58Z" title="27 Dec 2017, 17:44 GMT+5:30">a month ago</time-ago></span>
					          </td>
					        </tr>
					        <tr className="js-navigation-item navigation-focus">
					          <td className="icon">
					            <svg aria-hidden="true" className="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14">
					            	<path fillRule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path>
					            </svg>
					          </td>
					          <td className="content">
					            <span className="css-truncate css-truncate-target">
					            	<a href="/" className="js-navigation-open" id="6363" title="assets">node_modules</a>
					            </span>
					          </td>
					          <td className="message">
					            <span className="css-truncate css-truncate-target">
					              <a href="/" className="message" title="another commit">another commit</a>
					            </span>
					          </td>
					          <td className="age">
					            <span className="css-truncate css-truncate-target"><time-ago datetime="2017-12-27T12:14:58Z" title="27 Dec 2017, 17:44 GMT+5:30">a month ago</time-ago></span>
					          </td>
					        </tr>
					        <tr className="js-navigation-item navigation-focus">
					          <td className="icon">
					            <svg aria-hidden="true" className="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14">
					            	<path fillRule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path>
					            </svg>
					          </td>
					          <td className="content">
					            <span className="css-truncate css-truncate-target">
					            	<a href="/" className="js-navigation-open" id="6363" title="assets">styles</a>
					            </span>
					          </td>
					          <td className="message">
					            <span className="css-truncate css-truncate-target">
					              <a href="/" className="message" title="another commit">another commit</a>
					            </span>
					          </td>
					          <td className="age">
					            <span className="css-truncate css-truncate-target"><time-ago datetime="2017-12-27T12:14:58Z" title="27 Dec 2017, 17:44 GMT+5:30">a month ago</time-ago></span>
					          </td>
					        </tr>
					        <tr className="js-navigation-item navigation-focus">
					          <td className="icon">
					            <svg aria-hidden="true" className="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
					          </td>
					          <td className="content">
					            <span className="css-truncate css-truncate-target">
					            	<a href="/" className="js-navigation-open" id="6363" title="assets">README.md</a>
					            </span>
					          </td>
					          <td className="message">
					            <span className="css-truncate css-truncate-target">
					              <a href="/" className="message" title="another commit">another commit</a>
					            </span>
					          </td>
					          <td className="age">
					            <span className="css-truncate css-truncate-target"><time-ago datetime="2017-12-27T12:14:58Z" title="27 Dec 2017, 17:44 GMT+5:30">a month ago</time-ago></span>
					          </td>
					        </tr>
					        <tr className="js-navigation-item navigation-focus">
					          <td className="icon">
					            <svg aria-hidden="true" className="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
					          </td>
					          <td className="content">
					            <span className="css-truncate css-truncate-target">
					            	<a href="/" className="js-navigation-open" id="6363" title="assets">index.html</a>
					            </span>
					          </td>
					          <td className="message">
					            <span className="css-truncate css-truncate-target">
					              <a href="/" className="message" title="another commit">another commit</a>
					            </span>
					          </td>
					          <td className="age">
					            <span className="css-truncate css-truncate-target"><time-ago datetime="2017-12-27T12:14:58Z" title="27 Dec 2017, 17:44 GMT+5:30">a month ago</time-ago></span>
					          </td>
					        </tr>
					        <tr className="js-navigation-item navigation-focus">
					          <td className="icon">
					            <svg aria-hidden="true" className="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
					          </td>
					          <td className="content">
					            <span className="css-truncate css-truncate-target">
					            	<a href="/" className="js-navigation-open" id="6363" title="assets">sample.json</a>
					            </span>
					          </td>
					          <td className="message">
					            <span className="css-truncate css-truncate-target">
					              <a href="/" className="message" title="another commit">another commit</a>
					            </span>
					          </td>
					          <td className="age">
					            <span className="css-truncate css-truncate-target"><time-ago datetime="2017-12-27T12:14:58Z" title="27 Dec 2017, 17:44 GMT+5:30">a month ago</time-ago></span>
					          </td>
					        </tr>
					        </tbody>
      					</table>
      				</div>
		  			</div>
		  		</div>
  		</div>
  	)
  }
}
const listpage = () => (
	<div className="git">
      	<Header></Header>
      	<div className="col-lg-12">
	        	<Midseclist />
	     </div>
        <Footer></Footer>
    </div>
)

const Main = () => (
  <main>
    <Switch>
       <Route exact path='/' component={Profile} />
       <Route path='/listpage' target="_blank" component={listpage} />
    </Switch>
  </main>
)


// ========================================

ReactDOM.render(
 <Router>
 	<Main />
  </Router>,
  document.getElementById('root'))

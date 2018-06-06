import React, {Component} from 'react';
import logo from '../dist/img/logo_n.png';
import phoneWatch from '../dist/img/phone-watch.png';

export default class Header extends Component{
    render(){
        return(
            <div class="header-bg-linear-gradient">
            <div class="container">
            <div class="row">
			
			<nav class="navbar navbar-default">
            <div class="container-fluid">
            
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <div class="logo">
            <img src={logo} />
            <h3 class="putih">ChildPro</h3>
            </div>
            </div>
            
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="#start">Start</a></li>
            <li><a href="#whatischildpro">What is ChildPro ?</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="maintenance.html">Pricing</a></li>
            <li><a href="maintenance.html">Help</a></li>
            </ul>
            </div>
            </div>
			</nav>
            </div>
            
            <div class="row">
			<div class="col-md-6">
            <div class="img-product-header">
            <img src={phoneWatch} />
            </div>
			</div>
			<div class="col-md-6">
            <div class="text-product-header">
            <h1 class="putih">ChildPro</h1>
            <h4 class="putih">We save your child from strangers</h4>
            <p class="putih">Kids are going to fall, crash, slip and tumble. It's all part of being a kid, and we wouldn't want it any other way. But there are little things we can all do to ensure that kids avoid the more serious injuries that can lead to disabilities and even death.
            We've organized all our information in a variety of ways, from age of your child to risk area to space and place an injury might occur. To find exactly what you need just use this product. And don't forget to share this information with a friend. Because when it comes to keeping kids happy, active and safe, we're all in this together.</p>
            <a class="tombol-putih" href="maintenance.html">START</a>		
            </div>		
			</div>
            </div>
            
            </div>
            </div>	
        );
    }
}
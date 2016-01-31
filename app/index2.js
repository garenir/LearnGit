<!doctype html>
<html>
<head>
<link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />

    <!-- Include the AngularJS library -->
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
    </head>
    <body ng-app="AppMarketApp">
    <div class="header">
    <div class="container">
    <h1>App Market</h1>
</div>
</div>

<div class="main" ng-controller="MainController">
    <div class="container">
    <div class="card">
    <app-info info="move"></app-info>
    </div>

    <div class="card">
    <app-info info="shutterbugg"></app-info>
    </div>

    <div class="card">
    <app-info info="gameboard"></app-info>
    </div>
    <div class="card">
    <app-info info="forecast"></app-info>
    </div>
    </div>
    </div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

    <!-- Directives -->
    <script src="js/directives/appInfo.js"></script>


    </body>
    </html>

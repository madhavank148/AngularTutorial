Angular Session:
---------------
Pre-requisite:
--------------
HTML
CSS 
JS

Plan for 5 days:
---------------
1. Typescript
2. Angular:
	- Architecture - done
	-Data binding - done
	-Services - done
	-Module - Lazy Loading - done
	-Component - done
	-Routing -done
	-REST API - done
	-Pipe - done
	-Forms - done
	-Life cycle event - ngOninit - done
	-RxJS - operators, observables, observers - done

Day 1:
------
Details about typescript, Angular
Installation - done
Typescript
Installation
1. Visual Studio - https://code.visualstudio.com/download
2. Typescript - npm i -g typescript   => to get version tsc -version
3. Node - https://nodejs.org/en  - working on version 18.16
--------------------------------------------------------------------------------------------------------
Intro to typescript:
-------------------
JS:
---
No datatype
OOPS - funciton overloading
no error display - compile time

Typescript:
-----------
Superset of JS
All JS code are valid ts code - proved
inform us the error 
Strongly typed languge

Angular JS -> 1.X
Mobile application, dependency injection,
Angular 2.X onwards - typescript
SPA - Single Page Application 
FED
MVC 
Angular-> Node -> MSSQL/MongoDB
-----------------------------------------------------
compilation: convert our ts to js => transpiler =>Process: traspiling
		tsc filename.ts
run: XXXrun ts
     run only js=>node filename.js

Callback Function:
HOF: 
	-Higher Order Function
	-Which accepts function as an argument
Callback: function which you pass to the HOF

When to go for callback?
------------------------
*whenever you want to call different type of function, these functions can be passed as an argument to another function
*you do not want a function to be executed immediately, you want some x steps to be completed and you dont know when those x steps be completed then you write callback function
--------------------------------------------------------------------
Day 2:
Angular:
Mobile application
Enterprise applications
Social networking
Job portal
Advantage:
*Peformance - good - better than MPAs

Limitations of Angular:
1. SEO
2. Static content

Concepts:
---------
*Data binding
*Pipes

Execution:
main.ts->bootstrapModule(appmodule)->app/app.module.ts
			->bootstrap(AppComponent) ->AppComponent (class name) ->app.component.ts
			->
index.html =>  <app-root></app-root>  (selector)
all the .ts file logic, .html elements, .css styles gets pasted in the place pf <app-root>
 selector: 'maincomponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  Purpose of each and every file in angular project:
  --------------------------------------------------
  You can add global styles  - style.css
  package.json -> depedencies ->version
  packagelock.json ->url from where these depencies should be installed
  npm i -> will refer to my package.json
  tsconfig.json -> enable some key value pair -> achieve some kind task
  any component: 4 files
  component.ts -> business logic
  component.html-> UI
  component.css->design your UI
  component.spec.ts-> related to testing => Unit testing / Integrating 

  Data binding:
  -------------
  4 types
  1. Interpolation binding:
		*One way binding
		*data comes from ts and assigns to .html (ts->UI)
		*symbol: {{var_name}}
  2. Property binding/Attribute binding:
		you associate a value to the html property
		One way binding
		data comes from ts to html attributes(ts->UI)
		*symbol:[attr_name] =varname
		Style binding:
			style tags in html: example [style.color]="fontcolor"

  3. Event Binding:
          you associate a method available in ts to UI
          One way binding
          control gets transferred from UI to TS
          click->method available on the ts
          *symbol: ()
  4. Two-way binding:
          *Associate a control/html elements to a variable such that if a control values changes, the variable value get automatically updated. if the variable value changes, automatically the control values gets updated.
          Example: Present address and permanent address
          *symbol: [(property_name)]

  In typescript: your constructur can be created with the keyword constructor()

  Pipes:
  Pipes are common to all the components
  Pipes are built-in function -> functions for formatting
  Chaining the pipe or pipe chaining
  Symbol: |
  Two types:
  1) Built in pipe
		-lowercase
		-uppercase => will format the given data to uppercase
		-date
		-slice
	
  2) Custom pipe:
  Gender pipe: Welcome Ms.Sudha
  Custom gender pipe needs Data, additional param(gendertype)
command: ng g p pipe_name
ng g p gender

Get data from a json file - inside project

Directives:
add additional behaviours on your angular application
1. Built-in
     -Structural directive - add/ removal directive
          -ngIf: conditionally show/hide element
               Example:checkbox Is permanent address same as present address???
               present address to be copied to permanent address

          -ngFor
          -ngSwitch

     -Attribute directive 

     -component
2. Custom - user defined directives

Routing:
--------
Building block
Logical arrangement of your component
Navigation to your website
1. Routing - click on a link - I will display the logic written on the component
https://portal.accenture.com/#/all_accenture_links
2. Routing using parameter - based on the parameter value passed to url, i will display the respective data
3. Child Routing

Routing path: "all_accenture_links" ,"My Profile"
Keywords:
--------
<router-outlet> => will act as container control
routerLink => attribute to set the path
file to configure:
------------------
touch upon app-routing.module.ts - mapping of router link with the component
In this you have do configuration on routes[] => 2 keyword=>path , component
Whether you need routing? Yes
---------------------------------------------------------------------
Route parameter:
routing path/additional paramter
clicking on a particular-> more details on the movie
http://localhost:4200/Movies/Drishyam =>more details on the movie => moviedetails

Day 4:
-------
Dependency injection: USing one class property or memebers in another class by creating the object

RxJS: Reactive JS library
     -async call / callback
     -Keywords: Subscribe, Unsubscribe, Observables, Observers, Operators
Service:
--------
Common place/class where it has a common functionality
Similar to pipes - independent of any component
Service can be utilized or consumed by any other component present in the angular project

REST API:
--------
The data is available on a remote location - website/url
load the data from an external url
HTTPClient => HTTP Module
Dependency inject=> inject the service of HTTP Client=> RxJS=> take the latest data and load the UI

Modules:
--------
Building block of Angular
Physical arrangement of your project
Benefit the developer - maintain the application - categorize the related components under a particular roof
What is a module? 
     -gather similar components together
     -Categorization of components.

Module -> Entry point => 4 components under this module
Movie => Movie module=> 2 components
2 types:
-----------

common module
-------------
loaded on the initial request

loaded on the inital request
Lazy loading
------------
Increases the speed
All components under the lazy loading modules gets loades only after the request for that particular component/link
Keyword: loadChildren()

Forms:
-----
fill the data - obtain the user input - ex. reg form
=>(91) 12345 89900 => cross-verify 

HTML controls=> HTML/JS/JQuery

import 2 built-in Modules: Forms Module & Reactive Forms Module
keyword: ngModel

Task 1: Receive the value in the .ts file on a click of submit button
Task 2: Appropriate validation to the controls
          -validate - display the appropriate message
          -a control might associated with multiple validation

1. TDF : Template Driven Form
          - controls, validation
          - write validation code on UI/view
          -ngModel, #angularcontrolname="ngmodel"

2. MDF : Model Driven Form
          -controls, validation
          -write validation on the component.ts
          -Validator class
          -keywords: 
               *FormGroupName
               *formControlName



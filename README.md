# Props in React

This app accompanies these [Lecture Notes](https://github.com/upperlinecode/CS-and-the-City-Curriculum/blob/with-unit-2/react/3-react.md).

<a id="singleprop"></a>
### Passing Our First Property

Props are passed from the parent element to the child element. We are going to pass our first prop from App.js component (parent) to our Testimonials.js (child) component. To do so, we are going to modify the code in the App.js and Testimonials.js files to the following:

```javascript

const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <Navbar/>
        <Splash/>
        <Testimonials userTestimonial = "We Eat Street Meat is the best food review site that has ever been built. Now I can eat my street meat with confidence I can sit through my afternoon meetings."/>
        <div className = "container">
          <div className="row">

          </div>
        </div>
      </div>
    )
  }

  return component
}
```

You will notice we only modified line 16 of the code. We added an attribute to the Splash element; "firstTestimonial". By adding this attribute to our Testimonials element, it will be passed down as props from App.js.

From the [React documentation](https://reactjs.org/docs/components-and-props.html): "When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object "props"."

```javascript
function Testimonial(props){
  return(
    <div className="Testimonials">
      <div className="row">
        <div className="col-6 offset-3 testimonial">
          <h3 className="secondary-text-testimonial">Testimonial</h3>
          <p className="paragraph-text"> {props.userTestimonial}</p>
        </div>
      </div>
    </div>
  )
}
```

Now we are going to modify two lines of code in our Testimonials.js file:

We need to have our functional component take in a parameter called "props". By creating this parameter we are now able to pass the props object down from App.js into our Testimonial component.

We are then going to render our prop onto the screen. To embed our prop into the HTML we have written, we just have to add { props.testimonial } to the paragraph element on the page.

> It should be noted that this is also our first use of JSX syntax. React uses a syntax extension of JavaScript called JSX. JSX allows us to embed JavaScript into our HTML by wrapping the JavaScript in curly braces. To use the JavaScript variable "testimonial" in our HTML, we just need to add curly braced around it.

> Learn more about JSX in the [React Documentation](https://reactjs.org/docs/introducing-jsx.html)

In the example we just did, we passed a hard-coded string down as the prop "userTestimonial." We can also pass down a JavaScript variable (or even a function! But that's for another time) as a prop. Lets try this by refactoring our code a bit. We are going to create a variable called "testimonial" and set it equal to our previous review. Then we can pass it down as a prop by using JSX syntax as seen below:

```javascript
const App = () => {
  const component = new React.Component()

  component.render = () => {
    // Declare our variable called testimonial
    let testimonial = "We Eat Street Meat is the best food review site that has ever been built. Now I can eat my street meat with confidence I can sit through my afternoon meetings."
    // Pass that variable to the Testimonials component as part of the return
    return(
      <div className="App">
        <Navbar/>
        <Splash/>
        <Testimonials userTestimonial = { testimonial }/>
        <div className = "container">
          <div className="row">

          </div>
        </div>
      </div>
    )
  }

  return component
}
```

![Testimonials](./images/testimonials.png)

If done correctly, our web site should look like the example above.

<a id="multipleprop"></a>
### Passing Multiple Properties

We can pass multiple props down to a component, allowing us to use a component as a template that can be customized. By passing more props, we can add more and more customizations to our components. This is how the component we looked at the beginning of class might have had the same size or styling, but completely different images and text.

To complete We Eat Street Meat, we need to add reviews to our site. We have saved the reviews in a separate file, which we will import into our App component and then pass down as props to multiple review cards.

> It should be mentioned that the review_data file is serving as our "database" in this application. In a real application, we wouldn't save the reviews in a static file, but rather have them saved in a database that is loaded when the website is reached.

Let's create our first review card by adding the following code to our `App.js` file:

```javascript
const App = () => {
  const component = new React.Component()

  component.render = () => {
    let testimonial = "We Eat Street Meat is the best food review site that has ever been built. Now I can eat my street meat with confidence I can sit through my afternoon meetings."
    return(
      <div className="App">
        <Navbar/>
        <Splash/>
        <Testimonials userTestimonial = { testimonial }/>
        <div className = "container">
          <div className="row">
            <ReviewCard
              name={ reviews.review_array[0].name}
              headline={ reviews.review_array[0].headline}
              summary={ reviews.review_array[0].summary}
              stars={ reviews.review_array[0].stars}
              posted={ reviews.review_array[0].posted}
            />
          </div>
        </div>
      </div>
    )
  }

  return component
}
```

The first step is to create a Review Card element and add the attributes as seen above.

> To help students understand how this nested data is being extracted from the array, it would be a good idea to console.log(review) and look at the review object. Then, walk students through how to get the first name from the review in the array, the first headline, etc.

```javascript
function ReviewCard(props){
	return(
	  <div className="col-4 Review">
	    <div className="card text-center mb-3r">
	      <div className="card-header">
	        { props.name }
	      </div>
	      <div className="card-body">
	        <h5 className="card-title">{ props.headline }</h5>
	        <p className="card-text">{ props.summary }</p>
	        <p className="card-text">{ props.stars }</p>
	        <a href="#" className="btn btn-warning">Full Review</a>
	      </div>
	      <div className="card-footer text-muted">
	       { props.posted }
	      </div>
	    </div>
	  </div>
	);
};
```

Now we need to modify ReviewCard.js to utilize the props that are being passed down to it.

#### Question for Students

* How could we pass the review data to each card using only one attribute?

#### Mini-challenges

* Complete the website by creating a review card for each of the six reviews
* Refactor your code so that you **iterate** through the review data and create each card programmatically (rather than hard-coding each one). Try researching how to do this!

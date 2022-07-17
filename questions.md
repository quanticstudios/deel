1. What is the difference between Component and PureComponent? give an example where it might break my app.

-   Biggest difference between PureComponent and Component is that Component doesn’t implement shouldComponentUpdate() by default. One of the situations where app might break is when parent uses an array literal that breaks the PureComponent optimisation because it will always fail the equality check.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

-   ShouldComponentUpdate might prevent re-rendering of component tree, as well as children, if the props/state that it depends on are not modified by context, therefore blocking data passing to its children

3. Describe 3 ways to pass information from a component to its PARENT.

-   Pass the function as a prop to Child component then call it with arguments
-   Using context
-   Using application state managament

4. Give 2 ways to prevent components from re-rendering.

-   useMemo hook
-   React.memo

5. What is a fragment and why do we need it? Give an example where it might break my app.

-   React fragments is empty wrapper around components children that we use to group them without rendering unnecessary HTML elements.

6. Give 3 examples of the HOC pattern.

-   Provide additional props to component without knowing anything about the component
-   Connect component to application state managament
-   Compose components for code reuse

7. what's the difference in handling exceptions in promises, callbacks and async...await.

-   Callbacks and promises are handled inside event loop and will be put in stack once the code execution is done, async-await blocks the code and waits for it to be resolved

8. How many arguments does setState take and why is it async.

-   setState may take up to two arguments. It is async because setting state can be a costly operation and that would leave browser unresponsive.

9. List the steps needed to migrate a Class to Function Component.

-   changle class keyword to function
-   remove constructor if exists
-   remove render method
-   convert methods to functions
-   remove `this` keyword
-   replace setState with useState
-   remove any lifecycle methods and instead use hooks provided by React

10. List a few ways styles can be used with components.

-   inline with `style={{color:"red"}}`
-   using libraries like styled components

11. How to render an HTML string coming from the server.

-   By using `dangerouslySetInnerHTML` attribute

<div align="center"> 
	<img src="https://user-images.githubusercontent.com/64343445/186755432-8d73f405-500d-4b9c-89db-77c70b3a894a.jpg" width= "1000">
</div> 

# thorrellt.com
  
Welcome to the codebase for my portfolio website [thorrellt.com]( https://thorrellt.com/). This site was built using React & Bootstrap. The additional styling was done using CSS, with SCSS being used to customize some Bootstrap presets. 

## Key Takeaways

**React:** I spent the end of July 2022 until the beginning of August 2022 learning React. This transition from my previous portfolio, which was HTML, CSS, and JS (located @ [github.com/thorrellt/thorrellt-portfolio](https://github.com/thorrellt/thorrellt-portfolio) was a great opportunity to use my newly acquired skills to build a more sustainable portfolio.  

**Bootstrap/ React-Bootstrap:** I wanted to ensure this site was still responsive on all screen sizes. Based on my original design, and what I had learned from building the [MC 311 Tool](https://thorrellt.github.io/mc311-tool/), I decided Bootstrap would be a good fit to handle the layout. My research landed me on the React-Bootstrap package, and after some trial and error, and reading the documentation, I found the transition from Bootstrap-5 to React-Bootstrap to be fairly seamless. 

**EmailJS:** Since this page has no server-side logic associated with it, I had to find a way to implement a contact form. I integrated EmailJS’s platform to handle this service for me. The process was insightful, but luckily not to painful due to their well written documentation. 
  

## Installation

Once project is pulled, enter the main folder location and run npm install to add all the dependencies 

```bash
  cd ../[PROJECT-LOCATION]
  npm start
```

When all the dependencies are installed, the command npm run dev will build and run the app on your local environment.

```bash
  npm run dev
```    
    
## If I Revisited This Project, 
#### I Would...

-   Add a dark mode. 

-   Add either a filter or expanding section to house my projects as the number increases, in order to not have too many cards on the page at one time.

-   Add a backend to the site to handle assets, and to ease the process of updating, and adding information.

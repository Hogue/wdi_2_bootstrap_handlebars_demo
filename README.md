![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Handlebars & Bootstrap Demo

## Objectives

By the end of this, students should be able to:

- Install new javascript libraries using bower
- Render javascript objects dyanmically using handlebars
- Use the Bootstrap grid system to make a responsive page
- Create a visually appealing header using bootstrap styles
- Consult the bootstrap documenation for additional styling

# Part 1: Handlebars

## Instructions

1. Fork and clone
2. `npm install`
3. `bower install`
4. Follow along

## Templating

By now, we know how to render static html. What happens when we want to render data from another source?

## Handlebars

Handlebars is a javascript templating library.

Rendering objects with handlebars templates is a three step process:

1. Create a template in a script tag on your html page
2. Create a templating function
3. Pass the object(s) that you want to render into the templating function

## 1. Creating the template

Our client wants us to create a Game of Thrones fansite. Please run `grunt serve`, navigate to `localhost:9000/characters.html` and open up your console. What do you see?

By some magic hocus-pocus that we will discuss later, we have an array of character objects.

Our objects look like:

```var daenarys = {
    id: 1,
    name: "Daenerys Targaryen",
    title: "Stormborn of the House Targaryen, the First of Her Name, the Unburnt, Queen of Meereen, Queen of the Andals and the Rhoynar and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains and Mother of Dragons,
    quote: "I will take what is mine with blood and fire.",
    "url: "http://i.imgur.com/DjHJq4E.jpg"
  };```

Our template will mirror this structure.

First, we create a script tag in our html file.

```<script id="character-index" type="text/x-handlebars-template">
   </script>```

Now we can begin our template! True to handlebars's name, the library uses `{{}}` as wrappers.

First, we iterate through our array of objects:

```<script id="character-index" type="text/x-handlebars-template">
      {{#each characters}}
      {{/each}}
     </script>```

Next, we create tags for each object property:

```<script id="character-index" type="text/x-handlebars-template">
      {{#each characters}}
          <img src={{url}}/>
          <h2>{{name}}</h2>
          <h4>{{title}}</h4>
          <p><em>Quote: {{quote}}</em></p>
        </div>
      {{/each}}
    </script>```

## 2. Create a templating function

Now that we have a template made up, we need to pass data into it! Navigate over to `scripts/characters.js'. You should see a characters module. Ignore the top function for now. We'll get to that at a later lesson. For now, we will concern ourselves with the `_renderCharacters` function.

First, we need to compile our html template. This sounds complicated, but Handlebars makes it easy! We type:

```var template = Handlebars.compile($('#character-index').html());```

We are targeting the template with jQuery, extracting the html with `.html`, then feeding the result into Handlebars's compiling function. Finally, we point to the resulting function with the variable `template`.










## Additional Resources

List additional related resources such as videos, blog posts and official documentation.

- Handlebars documentation: http://handlebarsjs.com/reference.html
- Bootstrap Documentation: http://getbootstrap.com/

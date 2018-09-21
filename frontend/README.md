# Building the frontend

Now we need to build the frontend of our application.

We want to install Angular's default command line tool, which is `angular-cli`. This will allow us to make Angular projects, and automatically install Angular 6 for you :)

You can do so with:

```
npm install -g @angular/cli
```

Now, we need to create an empty Angular application. Do this with:

```
ng new <name-of-application>
```

Angular will create a new directory for you with an empty project! Hooray! It will also set up all your `npm` intial package dependencies.

To test everything has gone fine, try running your blank application:

```
ng serve --open
```

This will take some time (7+ seconds), so let Angular do its thing!

## Frontend structure

The frontend folder structure looks like this:

```
src/
    index.html
    styles.css
    app/
        app.module.ts
        app.component.ts
        app.component.css
        app.component.html
        list-item/
            app.module.ts
            list-item.component.ts
            list-item.component.css
            list-item.component.html
```

Here we only display the most important files to the project. Have a look around for some other interesting files!


## A good light reading:

https://www.techiediaries.com/angular-tutorial/

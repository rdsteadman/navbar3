Third Navbar Test
=================

Based on https://www.youtube.com/watch?v=s7YEaJnvrBM (by 80/20 Coding)

Uses Bootstrap components, I think.

Created this folder by running `npx create-react-app navbar3` 

Since I installed yarn, it seemed to use the yar version instead, and took longer than npm.
Also suggested a bunch of yarn commands instead:

	Success! Created navbar3 at C:\mydocs\React\test\navbar3
	Inside that directory, you can run several commands:

	yarn start
		Starts the development server.

	yarn build
		Bundles the app into static files for production.

	yarn test
		Starts the test runner.

	yarn eject
		Removes this tool and copies build dependencies, configuration files
		and scripts into the app directory. If you do this, you can't go back!

	We suggest that you begin by typing:

	cd navbar3
	yarn start

	Happy hacking!

First he makes a note that inn React you make "Class components" or "Functional components",
depending on whether or not they have state.

The default App.js that was made by create-react-app was a functional one. His project shows
a class version.

So I'm going to change it to a class.

Now make the NavBar.js component.

Type rfc [TAB] to get a functional component template from the VSC React add-on we installed.

Now Ctrl + back-tick to open a console. He uses npm install bootstrap, but we're using yarn
for now, so do "yarn add bootstrap" instead.

Add the sample navbar code from https://getbootstrap.com/docs/4.5/components/navbar/
to NavBar.js. This uses HTML-style tags rather than JSX, so they need to be fixed up
(e.g., "class" becomes "className"). In the bottom pane "Problems" section you can see
all the problems found.

NOTE: Actually, it seems to work without changing class to className.

Looks nice, except the drop-down dowsn't work. Changed to "className" to test anyway. Still name.

Also trying bootstrap icons:

https://www.npmjs.com/package/react-bootstrap-icons

yarn add react-bootstrap-icons

https://icons.getbootstrap.com/#usage







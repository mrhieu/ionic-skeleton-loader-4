# Ionic 4 Skeleton Loader component

[Demo](https://mrhieu.github.io/ionic-skeleton-loader-4)


## Setup

After clone or download this project.

Install Ionic CLI

```
$ npm install -g ionic
```

Install dependencies

```
$ cd <project>
$ npm install
```

Run the app on Localhost

```
$ ionic serve
```

See more at [Get started with Ionic](https://ionicframework.com/getting-started/)

## skeleton-element
`<skeleton-element>` is the main building block to build more complex skeleton-style loading screen

### Usage

```
<skeleton-element height="50px" width="50px" rounded="true"></skeleton-element>
```

You can add CSS classes or inline CSS as normal HTML element

```
<skeleton-element class="pin-image" height="50px" width="50px" rounded="true" style="margin-bottom: 16px"></skeleton-element>
```

### Available attributes

- @Input() width: string = '100%'; // can be px or %
- @Input() height: string = '16px'; // can be px or %
- @Input() borderRadius: string = '0'; // set border-radius
- @Input() rounded: boolean = false; // set border-radius to 999em to make rounded block
- @Input() noAnimated: boolean = false; // disable animation effect
- @Input() inline: boolean = false; // set display to inline-block

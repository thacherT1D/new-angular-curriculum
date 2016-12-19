# Template URLs

Standard: **Refactor Angular applications to use services and components (<a href="#">W0046</a>)**

## Objectives

By the end of this lesson you will:

- Describe how template URLs are defined
- Describe how Angular makes template URLs work

## Rationale

Working with templates as multiline strings can be tedious.  You don't get syntax highlighting or tools like emmet etc...  So it's often better from a development standpoint to have templates defined in separate files.

## Template URLs

Learn more at [https://docs.angularjs.org/guide/component](https://docs.angularjs.org/guide/component)

It's pretty simple:

- Use the `templateUrl` property instead of the `template` property
- Add a path instead of putting the template text

## How does it work?

When Angular encounters a `templateUrl` it makes an AJAX call to your server and downloads the template to use.  That means that the `templateUrl` must be a path relative to the _domain name_, not the path on the filesystem.

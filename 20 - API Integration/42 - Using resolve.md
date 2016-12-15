### Using resolve

Another fantastic part of ui-router (this also exists in `ngRoute`) is the ability to resolve promises before we render a view. This ensures that all data necessary is loaded before the view renders and it also allows us to change the state if a certain condition is not met (some kind of authentication or authorization!). This is very commonly done with `$http` or `$resource`.

# Add any notes here about your submission

## Application Under Test issues:

- UI elements don't have a unique ID and any text changes could break the tests. It's recommended to have unique IDs for each element to avoid this possible problem.
- "Upload Avatar" has CSS property "visibility: hidden". This could cause issues when trying to identify an element using an automation tool.
- "Create hCard" functionality doesn't work

## Necesary items to test:

- Personal and address details are previewed on the hCard preview
- Details are not cached on the hCard preview
- hCard avatar can be uploaded and updated multiple times

## Testing Framework notes:

- Running tests on Docker
- Used user-data.js JSON file under /support folder to store hCard user details.
- Used XPATH because many elements were unavailable to be declared with CSS. Note: CSS is faster and more browser-compatible over XPATH so by adding unique IDs this could be avoided.
- Used hCardBuilderSelector(), hCardPreviewSelector(), xPath() to avoid code duplication.

## Next Steps:

- Create Jenkinsfile to run Docker under CI.

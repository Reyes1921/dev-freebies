# Contribution

Thank you to everyone who has contributed to this project! Your help has been invaluable.

## How to contribute:

### Find the specific category folder in `src/data/<category>`:

- Locate the `data` folder in your project's directory.
- Identify the subfolder that corresponds to the category you want to contribute to `(e.g., '3d', 'animations', etc.)`.

### Add data to the TS file:

- Open the appropriate TS file within the category subfolder.
- Find the existing array of objects in the TS file.

### Before adding a content make sure that

- Make sure the website you want to add is not already included in the list.
- Verify that the website is free or has a free version.
- Ensure the website follows the following structure:

  - `id`: unique text string to identify the website
  - `name`: text string with the website name
  - `img`: text string with the URL of the website's image (in webp format, located in the public folder)
  - `link`: text string with the website URL
  - `color`: text string with the website's primary color (in color name or hexadecimal code format)

- Check that the `ID` is not duplicated with any other existing website in the list.

### Upload the Image:

- Ensure the image is in `webp` format
- Upload the image to the corresponding `public/<category>` folder.
- Update the image URL in the new object.

### Submit your contribution:

- Create a new pull request.
- In the pull request message, describe the changes you made and provide any additional information needed.

## Example `data`:

```json
{
  "id": 1,
  "name": "Poliigon",
  "img": "/3d/poliigon.webp",
  "link": "https://www.poliigon.com/search/free",
  "color": "#00A9CE"
}
```

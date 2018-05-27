## Data dictionary

The table below specifies the data schema of the cultural asset feature service hosted on ArcGIS Online. Note that the Storymap Shortlist requires the following fields to function properly: `NAME`, `TAB_NAME`, `PIC_URL`, `THUMB_URL`, `DESC1`.


| FIELD        | ALIAS        | DESCRIPTION                                                                                                                                                                     |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NAME         | NAME         | The name of the cultural asset                                                                                                                                                  |
| TAB_NAME     | CATEGORY     | The primary category of the asset. The field must be named `TAB_NAME` in order for the ESRI Shortlist Storymap to function properly. See the category table for valid categories. |
| PIC_URL      | PIC_URL      | A publicly accessible URL where the asset photo resides. Images can be hosted on a service such as Google Picasa. Ideal photo dimensions = 1000px by 750px.                     |
| THUMB_URL    | THUMB_URL    | Same as `PIC_URL`, except ideal image size is 250px by 166 px tall.                                                                                                               |
| DESC1        | DESCRIPTION  | Description of the cultural asset.                                                                                                                                              |
| ADDRESS      | ADDRESS      | Street address, if one exists.                                                                                                                                                  |
| STATUS       | STATUS       | Default value is `0`, which equals `unapproved`. `1` = `approved`. `-1` = `rejected`. `-2` = `requires further information`. Assets will appear on publicly-facing maps only if `STATUS = 1`             |
| SUBCATEGORY1 | SUBCATEGORY1 | Subcategory of asset. See the category list below for valid categories.                                                                                                              |
| CATEGORY2    | CATEGORY2    | A second primary category, if one exists.                                                                                                                                       |
| SUBCATEGORY2 | SUBCATEGORY2 | A second subcategory, if one exists.                                                                                                                                            |
| MAKER        | MAKER        | The maker of the cultural asset, e.g. architect, designer, artist, organization.                                                                                                |
| FUNDER       | FUNDER       | The individual or organization that funded the asset's creation, if known.                                                                                                      |
| WEBSITE      | WEBSITE      | A website where users can find more information about the asset.                                                                                                                |
| YEAR         | YEAR         | Year of asset's creation, if known.                                                                                                                                             |
| MACRIS_ID    | MACRIS_ID    | ID number of the asset in the Massachusetts Cultural Resource Information System, if one exists.                                                                                |

## Cultural asset categories

- **Architecture**
  - Historic building
  - Significant restoration/renovation
  - Contemporary building
  - Notable design detail
- **Landmark or monument**
  - Heritage Site
  - Landmark
  - Monument
  - Cemetery
- **Public art**
  - Mural
  - Street art
  - Sculpture
  - Installation
- **Creative industry**
  - Creative studio
  - Practice space
  - Creative business
  - Coworking facility
  - Art supplies
  - Artist live/work space
- **Park or open space**
  - Park
  - Playground
  - Natural space
  - Scenic Area
  - Community Garden
- **Cultural facility**
  - Performance space
  - Exhibition space
  - Place of worship
  - Social club
- **Food**
  - Bar
  - Restaurant
  - Commercial kitchen
  - Urban agriculture
- **Programming or event**
  - School
  - Library
  - Educational programming
  - Festival
  - Meeting hall
  - Other notable event

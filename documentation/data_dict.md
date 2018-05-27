## Data dictionary

The table below specifies the data schema of the cultural asset feature service hosted on ArcGIS Online. Note that the Storymap Shortlist requires the following fields to function properly: `NAME`, `TAB_NAME`, `PIC_URL`, `THUMB_URL`, `DESC1`. For more information about the Storymap Shortlist app template, visit the FAQ [here](https://storymaps.arcgis.com/en/faq/#question45) or the Shortlist Github repository, [here](https://github.com/Esri/storymap-shortlist/).

For a detailed view of the feature service specification, you can access the feature service specification [here](https://services3.arcgis.com/U4SbXhYNLOfN36SP/arcgis/rest/services/2018_05_20_Assets_Cleaned/FeatureServer/0?token=TzKs2EtgRRof7zgYVSuL0ONHYyOGQJjO4o5HJcgUaDz8xlaAJhp04va_b5B2PJCg6iTQSTL1G98a-8ygcwoqvmVqP-DBG24A24oIxCY7XKYMuipxS_k29G0-FKfIlsE7tb9_yVcZ5jVqjkW6IyNlu_iXnCKEwOha4i4yCypJDC9asxYi0NcFbCmX7ikVLlaJrjONF5H5IXUbKr9ICPcaAPV0NK7uAUu7bTsAMxbYTit-8-6PyL1QYId4Uwc-tsuT).

| FIELD        | ALIAS        | DESCRIPTION                                                                                                                                                                                  | Date Type   |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| NAME         | NAME         | The name of the cultural asset                                                                                                                                                               | `string`    |
| TAB_NAME     | CATEGORY     | The primary category of the asset. The field must be named `TAB_NAME` in order for the ESRI Shortlist Storymap to function properly. See the category table for valid categories.            | `string`    |
| PIC_URL      | PIC_URL      | A publicly accessible URL where the asset photo resides. Images can be hosted on a service such as Google Picasa. Ideal photo dimensions = 1000px by 750px.                                  | `string`    |
| THUMB_URL    | THUMB_URL    | Same as `PIC_URL`, except ideal image size is 250px by 166 px tall.                                                                                                                          | `string`    |
| DESC1        | DESCRIPTION  | Description of the cultural asset.                                                                                                                                                           | `string`    |
| ADDRESS      | ADDRESS      | Street address, if one exists.                                                                                                                                                               | `string`    |
| STATUS       | STATUS       | Default value is `0`, which equals `unapproved`. `1` = `approved`. `-1` = `rejected`. `-2` = `requires further information`. Assets will appear on publicly-facing maps only if `STATUS = 1` | `int`       |
| SUBCATEGORY1 | SUBCATEGORY1 | Subcategory of asset. See the category list below for valid categories.                                                                                                                      | `string`    |
| CATEGORY2    | CATEGORY2    | A second primary category, if one exists.                                                                                                                                                    | `string`    |
| SUBCATEGORY2 | SUBCATEGORY2 | A second subcategory, if one exists.                                                                                                                                                         | `string`    |
| MAKER        | MAKER        | The maker of the cultural asset, e.g. architect, designer, artist, organization.                                                                                                             | `string`    |
| FUNDER       | FUNDER       | The individual or organization that funded the asset's creation, if known.                                                                                                                   | `string`    |
| WEBSITE      | WEBSITE      | A website where users can find more information about the asset.                                                                                                                             | `string`    |
| YEAR         | YEAR         | Year of asset's creation, if known.                                                                                                                                                          | `int`       |
| MACRIS_ID    | MACRIS_ID    | ID number of the asset in the Massachusetts Cultural Resource Information System, if one exists.                                                                                             | `string`    |
| SOURCE       | SOURCE       | Source of cultural asset data, if known.                                                                                                                                                     | `string`    |
| CreationDate | CreationDate | The date when the feature was created. Auto-completed by ArcGIS Online.                                                                                                                                                                                             | `date`      |
| Creator      | Creator      | The user that created the feature. Auto-completed by ArcGIS Online.                                                                                                                                                                                             | `string`    |
| EditDate     | EditDate     | Auto-completed by ArcGIS Online.                                                                                                                                                                                             | `date`      |
| Editor       | Editor       | Last date on which the feature was edited. Auto-completed by ArcGIS Online.                                                                                                                                                                                             | `string`    |
| GlobalID     | GlobalID     | A unique identifier generated by ArcGIS Online.                                                                                                                                              | `Global ID` |

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

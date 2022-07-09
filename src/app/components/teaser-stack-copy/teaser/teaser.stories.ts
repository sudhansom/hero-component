import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SitemuleCoreModule } from '../../../../core/sitemule-core.module';
import { TeaserComponent } from './teaser.component';

export default {
  title: 'Sitemule-Page/Teaser',
  component: TeaserComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, RouterModule],
    }),
  ],
} as Meta;
const Template: Story<TeaserComponent> = (args: TeaserComponent) => ({
  component: TeaserComponent,
  props: args,
});
const baseData = {
      "id": 32,
      "title": "3 - teaser, Reparation",
      "seourl": "teaser-reparation",
      "contentType": "teaser",
      "metadescription": "",
      "metakeywords": "",
      "keywords": "",
      "composition": {
        "border": false,
        "borderColor": "",
        "inverse": false,
        "backgroundcolor": "",
        "textBackgroundColor": "#FFFFFF",
        "autoScale": false,
        "canvasImagePosition": ""
      },
      "images": [
        {
          "layout": {
            "inverse": false,
            "backgroundcolor": "#003B6E",
            "textBackgroundColor": "#FFFFFF",
            "autoScale": false,
            "useImageAsBackground": false,
            "imageposition": "",
            "icon": "icon-Service-og-reparation",
            "iconColor": "#FFFFFF",
            "iconPosition": "tc",
            "buttonBackgroundColor": "#FFFFFF",
            "buttonTextColor": "#003B6E",
            "buttonPosition": "bc"
          },
          "url": "",
          "link": "service/repair",
          "target": "",
          "title": "Repair and calibration",
          "caption": "With more than 8,000 spare parts in stock as well as test equipment living up to the highest standards, we offer accredited calibration and fast handling of repair cases",
          "buttonText": "Read more about repair"
        }
      ]

}
export const Primary = Template.bind({});
Primary.args = {
  teaser: baseData,
};
export const withImage = Template.bind({});
withImage.args = {
  teaser: {...baseData,
    images: [
        {
          "layout": {
            "inverse": false,
            "backgroundcolor": "#003B6E",
            "textBackgroundColor": "#FFFFFF",
            "autoScale": false,
            "useImageAsBackground": false,
            "imageposition": "",
            "icon": "icon-Service-og-reparation",
            "iconColor": "#FFFFFF",
            "iconPosition": "tc",
            "buttonBackgroundColor": "#FFFFFF",
            "buttonTextColor": "#003B6E",
            "buttonPosition": "bc"
          },
          "url": "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png",
          "link": "service/repair",
          "target": "",
          "title": "Repair and calibration",
          "caption": "With more than 8,000 spare parts in stock as well as test equipment living up to the highest standards, we offer accredited calibration and fast handling of repair cases",
          "buttonText": "Read more about repair"
        }

    ]

  },
};


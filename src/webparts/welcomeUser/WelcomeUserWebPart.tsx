import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import WelcomeUser from './components/WelcomeUser';

import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import "../../main.css";

export type WelcomeUserWebPartProps = {
  welcomeMessage: string;
}

export default class WelcomeUserWebPart extends BaseClientSideWebPart<WelcomeUserWebPartProps> {

  public render(): void {
    ReactDom.render(<WelcomeUser welcomeMessage={this.properties.welcomeMessage} userDisplayName={this.context.pageContext.user.displayName} />, this.domElement);
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Welcome webpart"
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('welcomeMessage', {
                  label: 'Welcome Message'
                })
              ]
            }
          ]
        }
      ]
    }
  }
}

import React from 'react';
import type Editor from '../editor';
import { EditorConfig } from '../share/var';

export interface PluginProps {
  editor: Editor;
  editorConfig: EditorConfig;
  config: any;
}

export abstract class PluginComponent<S = {}, P extends PluginProps = PluginProps> extends React.Component<P, S> {
  static pluginName: string = '';

  static align: string = 'left';

  static defaultConfig = {};

  protected get editor(): Editor {
    return this.props.editor;
  }

  protected get editorConfig(): EditorConfig {
    return this.props.editorConfig;
  }

  protected getConfig(key: string, defaultValue?: any) {
    return typeof this.props.config[key] !== 'undefined' && this.props.config[key] !== null
      ? this.props.config[key]
      : defaultValue;
  }
}

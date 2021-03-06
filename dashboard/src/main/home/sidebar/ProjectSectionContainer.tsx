import React, { Component } from 'react';
import styled from 'styled-components';

import { Context } from '../../../shared/Context';
import ProjectSection from './ProjectSection';

type PropsType = {
  setCurrentView: (x: string) => void,
};

type StateType = {
};

// Props in context to project section to trigger update on context change
export default class ProjectSectionContainer extends Component<PropsType, StateType> {
  state = {
  }

  render() {
    return (
      <ProjectSection
        currentProject={this.context.currentProject}
        projects={this.context.projects}
        setCurrentView={this.props.setCurrentView}
      />
    );
  }
}

ProjectSectionContainer.contextType = Context;
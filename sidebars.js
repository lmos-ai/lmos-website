/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "introduction",
    "agent",
    "multi_agent_system",
    {
      type: 'category',
      label: 'Architecture',
      collapsible: true,
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/agent_description',
        'architecture/agent_discovery',
        'architecture/agent_registry',
        'architecture/agent_communication',
        'architecture/group_management'

      ],
    },
    "getting_started",
  ]
};

export default sidebars;

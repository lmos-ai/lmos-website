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
    "who_is_it_for",
    "agent",
    {
      type: 'category',
      label: 'Multi-Agent System',
      collapsible: true,
      collapsed: false,
      items: [
        'multi_agent_system/overview',
        'multi_agent_system/agent_description',
        'multi_agent_system/agent_discovery',
        'multi_agent_system/agent_registry',
        'multi_agent_system/agent_communication',
        'multi_agent_system/group_management',
        'multi_agent_system/agent_lifecycle'
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsible: true,
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/lmos_control_plane',
        'architecture/lmos_router',
        'architecture/lmos_runtime',
        'architecture/agent_reactor'         
      ],
    },
    "getting_started",
  ]
};

export default sidebars;

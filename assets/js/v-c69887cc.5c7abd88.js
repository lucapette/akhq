"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[642],{927:(e,o,t)=>{t.r(o),t.d(o,{data:()=>r});const r={key:"v-c69887cc",path:"/docs/configuration/authentifications/groups.html",title:"Groups",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/authentifications/groups.md",git:{updatedTime:163951673e4,contributors:[{name:"tchiotludo",email:"tchiot.ludo@gmail.com",commits:1}]}}},4573:(e,o,t)=>{t.r(o),t.d(o,{default:()=>c});const r=(0,t(6252).uE)('<h1 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> Groups</h1><p>Groups allow you to limit user</p><p>Define groups with specific roles for your users</p><ul><li><p><code>akhq.security.default-group</code>: Default group for all the user even unlogged user</p></li><li><p><code>akhq.security.groups</code>: Groups map definition</p><ul><li><code>key:</code> a uniq key used as name if not specified <ul><li><code> name: group-name</code> Group identifier</li><li><code>roles</code>: Roles list for the group</li><li><code>attributes.topics-filter-regexp</code>: Regexp list to filter topics available for current group</li><li><code>attributes.connects-filter-regexp</code>: Regexp list to filter Connect tasks available for current group</li><li><code>attributes.consumer-groups-filter-regexp</code>: Regexp list to filter Consumer Groups available for current group</li></ul></li></ul></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><code>topics-filter-regexp</code>, <code>connects-filter-regexp</code> and <code>consumer-groups-filter-regexp</code> are only used when listing resources. If you have <code>topics/create</code> or <code>connect/create</code> roles and you try to create a resource that doesn&#39;t follow the regexp, that resource <strong>WILL</strong> be created.</p></div><p>3 defaults group are available :</p><ul><li><code>admin</code> with all right</li><li><code>reader</code> with only read access on all AKHQ</li><li><code>no-roles</code> without any roles, that force user to login</li></ul>',7),i={},c=(0,t(3744).Z)(i,[["render",function(e,o){return r}]])},3744:(e,o)=>{o.Z=(e,o)=>{for(const[t,r]of o)e[t]=r;return e}}}]);
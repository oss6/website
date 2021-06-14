---
layout: layouts/post.njk
title: The COVID-19 Data Portal
date: 2021-06-04
author: Ossama Edbali
tags: post
---

<div class="bg-amber-100 shadow px-5 py-4 mb-4">
  <h3 class="text-2xl text-amber-800">The COVID-19 Data Portal publication</h3>
  <p>The COVID-19 Data Portal is an <a href="https://twitter.com/hashtag/openaccess?src=hashtag_click" class="link">#openaccess</a>, <a href="https://twitter.com/hashtag/FAIR?src=hashtag_click" class="link">#FAIR</a> data resource that enables researchers to identify key <a href="https://twitter.com/hashtag/SARSCoV2?src=hashtag_click" class="link">#SARSCoV2</a> datasets vital for <a href="https://twitter.com/hashtag/COVID19?src=hashtag_click" class="link">#COVID19</a> research. Find out more in this new <a href="https://twitter.com/NAR_Open" class="link">@NAR_Open</a> publication: <a href="https://doi.org/10.1093/nar/gkab417" class="link">https://doi.org/10.1093/nar/gkab417</a>
  </p>
</div>

<a href="https://www.covid19dataportal.org/" class="link">The COVID-19 Data Portal</a> is a project that was released as part of the European COVID-19 Data Platform to facilitate rapid and open data sharing and analysis, to accelerate global SARS-CoV-2 and COVID-19 research <a href="#references" class="link">(1)</a>.

Having worked as a web developer on the portal, I wanted to share the progress so far and what you can use the portal for.

I joined the COVID-19 Data Portal Task Force (as part of the European Bioinformatics Institute) in October when it was somewhat mature.
My main tasks are presenting new data types, maintaining existing ones, and implementing new features.

For more information check out the <a href="https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkab417/6287847" class="link">publication</a> on Oxford Nucleic Acids Research.

<h2>Datasets</h2>

The portal consists of the following data categories:

<ul class="list-disc pl-8">
  <li><strong>Viral sequences</strong> - raw and assembled sequence and analysis of SARS-CoV-2 and other coronaviruses</li>
  <li><strong>Host sequences</strong> - raw and assembled sequence and analysis of human and other hosts</li>
  <li><strong>Expression</strong> - gene and protein expression data of human genes implicated in virus infection</li>
  <li><strong>Proteins</strong> - sequence, functional and classification data on SARS-CoV-2 and host proteins</li>
  <li><strong>Biochemistry</strong> - COVID-19 pathways, interactions, complexes, targets and compounds</li>
  <li><strong>Imaging</strong> - biological images from microscopy and other platforms</li>
  <li><strong>Literature</strong> - latest Coronavirus articles and preprints from EuropePMC</li>
</ul>

<h2>Architecture</h2>

The data presented in the portal comes from disparate data sources, including ENA, UniProt etc...
Therefore the portal obtains such data from EBI Search, a scalable text search engine that provides easy and uniform access to the biological data resources hosted at the European Bioinformatics Institute <a href="#references" class="link">(2)</a>.

EBI Search provides a unified and simple to access API which the portal uses throughout the data categories mentioned above.

EBI Search includes a vast amount of data, however the portal uses subsets that are related to COVID-19 by either restricting the results using a query (e.g. against a taxonomy) or using a specified COVID-19 data domain.

<h2>Features</h2>

<ul class="list-disc pl-8">
  <li>Free text search</li>
  <li>Filtering on date fields and any other data source related fields (e.g. taxonomy, country, centre)</li>
  <li>Cross-reference searching</li>
  <li>Bulk or selective downloads of the sequences in a section</li>
  <li>Data statistics</li>
  <li>Data submission guidance</li>
  <li>Ability to inspect specific data entries from their actual source</li>
</ul>

<h2 id="references">References</h2>

<ol class="list-decimal pl-8">
  <li>Madeira F., Park Y.M., Lee J., Buso N., Gur T., Madhusoodanan N., Basutkar P., Tivey A.R.N., Potter S.C., Finn R.D. et al. . The EMBL-EBI search and sequence analysis tools APIs in 2019. Nucleic Acids Res. 2019; 47:W636–W641.</li>
  <li>Peter W Harrison, Rodrigo Lopez, Nadim Rahman, Stefan Gutnick Allen, Raheela Aslam, Nicola Buso, Carla Cummins, Yasmin Fathy, Eloy Felix, Mihai Glont, Suran Jayathilaka, Sandeep Kadam, Manish Kumar, Katharina B Lauer, Geetika Malhotra, Abayomi Mosaku, Ossama Edbali, Young Mi Park, Andrew Parton, Matt Pearce, Jose Francisco Estrada Pena, Joseph Rossetto, Craig Russell, Sandeep Selvakumar, Xènia Pérez Sitjà, Alexey Sokolov, Ross Thorne, Marianna Ventouratou, Peter Walter, Galabina Yordanova, Amonida Zadissa, Guy Cochrane, Niklas Blomberg, Rolf Apweiler, The COVID-19 Data Portal: accelerating SARS-CoV-2 and COVID-19 research through rapid open access data sharing, Nucleic Acids Research, 2021;, gkab417, <a href="https://doi.org/10.1093/nar/gkab417" class="link">https://doi.org/10.1093/nar/gkab417</a></li>
</ol>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>dashboard.md</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li>
<ul>
<li><a href="#dashboard">Dashboard</a></li>
</ul>
</li>
</ul>

    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
      <h2 id="dashboard">Dashboard</h2>
<h3 id="instructor">Instructor</h3>
<h5 id="note-if-not-specified-default-headers-are">Note: If not specified, default headers are</h5>
<pre class=" language-json"><code class="prism  language-json"><span class="token punctuation">{</span>
	<span class="token string">"Authorization"</span><span class="token punctuation">:</span>	<span class="token string">"Bearer {Token}"</span><span class="token punctuation">,</span>
	<span class="token string">"Content-Type"</span><span class="token punctuation">:</span> 	<span class="token string">"application/json"</span><span class="token punctuation">,</span>
	<span class="token string">"Accept"</span><span class="token punctuation">:</span> 		<span class="token string">"application/json"</span><span class="token punctuation">,</span>
	<span class="token string">"Accept-Encoding"</span><span class="token punctuation">:</span> 	<span class="token string">"gzip, deflate, br"</span>
<span class="token punctuation">}</span>
</code></pre>
<hr>
<h4 id="codefont-colorfaa61agetfont-apiv1instructordashboardcode"><code><font color="#faa61a">GET</font> /api/v1/instructor/dashboard</code></h4>
<p>Query and return the information for the instructor’s dashboard</p>
<p><strong>JSON Params:</strong></p>
<pre class=" language-json"><code class="prism  language-json"><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre>
<p><strong>Return</strong>:</p>
<pre class=" language-json"><code class="prism  language-json"><span class="token punctuation">{</span>
	<span class="token string">"draft"</span><span class="token punctuation">:</span> 	Array <span class="token operator">&lt;</span>Simulation<span class="token operator">&gt;</span><span class="token punctuation">,</span>
	<span class="token string">"open"</span><span class="token punctuation">:</span> 	Array <span class="token operator">&lt;</span>Simulation<span class="token operator">&gt;</span><span class="token punctuation">,</span>
	<span class="token string">"closed"</span> 	Array <span class="token operator">&lt;</span>Simulation<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre>
<hr>
<h4 id="codefont-colorfa3a02a61adeletefont-apiv1instructordashboardsimulationfont-colorcccsimulation.idfontdashboardcode"><code><font color="#fa3a02a61a">DELETE</font> /api/v1/instructor/dashboard/simulation/{<font color="#ccc">simulation.id</font>}dashboard</code></h4>
<p>Query and return the information for the instructor’s dashboard</p>
<p><strong>Headers:</strong></p>
<pre class=" language-json"><code class="prism  language-json"><span class="token punctuation">{</span>
	<span class="token string">"Connection"</span><span class="token punctuation">:</span>		<span class="token string">"keep-alive"</span><span class="token punctuation">,</span>
	<span class="token string">"Authorization"</span><span class="token punctuation">:</span>	<span class="token string">"Bearer {Token}"</span><span class="token punctuation">,</span>
	<span class="token string">"Content-Type"</span><span class="token punctuation">:</span> 	<span class="token string">"application/json"</span><span class="token punctuation">,</span>
	<span class="token string">"Accept"</span><span class="token punctuation">:</span> 			<span class="token string">"application/json"</span><span class="token punctuation">,</span>
	<span class="token string">"Accept-Encoding"</span><span class="token punctuation">:</span> 	<span class="token string">"gzip, deflate, br"</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>JSON Params:</strong></p>
<pre class=" language-json"><code class="prism  language-json"><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre>
<p><strong>Return</strong>:</p>
<pre class=" language-json"><code class="prism  language-json"><span class="token punctuation">{</span>
	<span class="token string">"drafts"</span><span class="token punctuation">:</span> 	Array <span class="token operator">&lt;</span>Simulation<span class="token operator">&gt;</span><span class="token punctuation">,</span>
	<span class="token string">"open"</span><span class="token punctuation">:</span> 	Array <span class="token operator">&lt;</span>Simulation<span class="token operator">&gt;</span><span class="token punctuation">,</span>
	<span class="token string">"closed"</span> 	Array <span class="token operator">&lt;</span>Simulation<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre>

    </div>
  </div>
</body>

</html>

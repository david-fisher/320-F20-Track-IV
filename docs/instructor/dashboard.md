---


---

<h3 id="dashboard">Dashboard</h3>
<h4 id="font-colorfaa61agetfont-apiv1dashboard"><font color="#faa61a">GET</font> /api/v1/dashboard</h4>
<p>Query and return the information for the instructor’s dashboard</p>
<p><strong><code>JSON</code> Params:</strong></p>

<table>
<thead>
<tr>
<th>param</th>
<th>type</th>
<th>description</th>
<th>long description</th>
</tr>
</thead>
<tbody>
<tr>
<td>email</td>
<td>string  [required]</td>
<td>Email address</td>
<td><p align="center">UMass email address of user. Username is created from email.</p></td>
</tr>
</tbody>
</table><p><strong>Return</strong>:</p>
<pre class=" language-json"><code class="prism  language-json"><span class="token punctuation">{</span>
	<span class="token string">"email"</span><span class="token punctuation">:</span> <span class="token string">"foobar@umass.edu"</span><span class="token punctuation">,</span>
	<span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token string">"api_token"</span><span class="token punctuation">:</span> <span class="token string">"hVF4CVDlbuUg18MmRZBA4pDkzuXZi9Rzm5wYvSPtxvF8qa8CK9GiJqMXdAMv"</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Note:</strong> This request uses <code>'Content-Type: application/json'</code>.</p>


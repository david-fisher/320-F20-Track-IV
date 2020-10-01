---


---

<h2 id="sign-up">Sign Up</h2>
<h4 id="post-apiusersignup"><code>POST /api/user/signUp</code></h4>
<p>Sign user up and return Auth token</p>
<p><strong>Params:</strong></p>

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
<td>id</td>
<td>integer  [required]</td>
<td>Program ID</td>
<td><p align="center">Unique ID of the program</p></td>
</tr>
</tbody>
</table><p><code>curl -X POST -d '{"id": 258}' -H 'Content-Type: application/json' /api/search_program</code></p>
<p><strong>Note:</strong> This request uses <code>'Content-Type: application/json'</code>.</p>


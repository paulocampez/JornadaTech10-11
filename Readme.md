

# Autenticação com spotify

O app fornece o Client ID e o Client Secret necessários para implementar qualquer um dos fluxos de autorização.

Para isso, vá ao seu [Dashboard](https://developer.spotify.com/dashboard) e clique no botão Create an App para abrir a seguinte caixa de diálogo:
![image](https://user-images.githubusercontent.com/10332498/201724931-afa726df-8751-452a-94f8-4fcf8142f7ee.png)
Insira um nome de aplicativo e uma descrição de aplicativo de sua escolha (eles serão exibidos para o usuário na tela de concessão), marque a caixa de seleção Termos de serviço do desenvolvedor e, finalmente, clique em CRIAR. Seu aplicativo agora está registrado e você será redirecionado para a página de visão geral do aplicativo.
![image](https://user-images.githubusercontent.com/10332498/201725080-251bf6f6-e6ae-4d60-a0bd-c9becbecbad8.png)

Clique em Editar configurações para visualizar e atualizar as configurações do seu aplicativo. A seguinte caixa de diálogo será exibida:
![image](https://user-images.githubusercontent.com/10332498/201725141-b78fa7bd-58fb-49d7-b15a-50422741b6e1.png)
Em URIs de redirecionamento, insira um ou mais endereços que você deseja colocar na lista de permissões do Spotify. Esse URI permite que o serviço de autenticação do Spotify invoque automaticamente seu aplicativo sempre que o usuário fizer login (por exemplo, http://localhost:8080/callback)

Depois de terminar de atualizar as configurações do aplicativo, clique em SALVAR.
![image](https://user-images.githubusercontent.com/10332498/201725183-802c3193-b416-4ac7-bc6f-caefddbf6107.png)

Utilize seu clientId e secretId para gerar o token de autenticação, então poderá realizar as consultas pela biblioteca

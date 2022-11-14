

# Autenticação com spotify

O app fornece o Client ID e o Client Secret necessários para implementar qualquer um dos fluxos de autorização.

Para isso, vá ao seu [https://developer.spotify.com/dashboard](Dashboard) e clique no botão Create an App para abrir a seguinte caixa de diálogo:


Insira um nome de aplicativo e uma descrição de aplicativo de sua escolha (eles serão exibidos para o usuário na tela de concessão), marque a caixa de seleção Termos de serviço do desenvolvedor e, finalmente, clique em CRIAR. Seu aplicativo agora está registrado e você será redirecionado para a página de visão geral do aplicativo.

Clique em Editar configurações para visualizar e atualizar as configurações do seu aplicativo. A seguinte caixa de diálogo será exibida:

Em URIs de redirecionamento, insira um ou mais endereços que você deseja colocar na lista de permissões do Spotify. Esse URI permite que o serviço de autenticação do Spotify invoque automaticamente seu aplicativo sempre que o usuário fizer login (por exemplo, http://localhost:8080/callback)
Depois de terminar de atualizar as configurações do aplicativo, clique em SALVAR.

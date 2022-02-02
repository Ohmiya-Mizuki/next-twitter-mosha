import { StyledNavigation, StyledLogo, StyledLogoBox } from "./style";
export const Navigation = () => {
  return (
    <StyledNavigation>
      {/* FIXME: 2/2にatomとして実装する */}
      <StyledLogoBox>
        <StyledLogo />
      </StyledLogoBox>
      <div>
        <nav>
          <a href="home">
            <div>
              ホーム
            </div>
          </a>
          <a href="home">
            <div>
              話題を検索
            </div>
          </a>
          <a href="home">
            <div>
              通知
            </div>
          </a>
          <a href="home">
            <div>
              メッセージ
            </div>
          </a>
          <a href="home">
            <div>
              ブックマーク
            </div>
          </a>
          <a href="home">
            <div>
              リスト
            </div>
          </a>
          プロフィール
          <a href="home">
            <div>
              もっと見る
            </div>
          </a>
        </nav>
      </div>
    </StyledNavigation>
  )
}
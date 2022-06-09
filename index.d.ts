export default interface UmAnalytics {
  /**
   * 初始化
   */
  init: (key: string, channel: string) => void;
  /**
   * 进入页面
   */
  onPageStart: (routeName: string) => void;
  /**
   * 退出页面
   */
  onPageEnd: (routeName: string) => void;
  /**
   * 开启调试模式
   */
  setLogEnabled: (enabled: boolean) => void;
  /**
   * 自定义事件
   */
  onEventAttributes: (id: string, attributes: any) => void;
  /**
   * 自定义label
   */
  onEventLabel: (id: string, label: string) => void;
}

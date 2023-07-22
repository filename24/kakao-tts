import Logger from '@utils/Logger'
import BaseManager from './BaseManager.js'
import BotClient from '@structures/BotClient'

/**
 * @extends {BaseManager}
 */
export default class DatabaseManager extends BaseManager {
  private logger: Logger

  public Endpoint = 'https://demo-vox-proxy.i.kakao.com/v1/ttsURL'
  constructor(client: BotClient) {
    super(client)

    this.logger = new Logger('DatabaseManager')
  }

  async load() {
    this.logger.debug('Loading kakao api')
  }
}

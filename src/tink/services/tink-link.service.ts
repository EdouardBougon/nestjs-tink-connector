/* eslint-disable @typescript-eslint/naming-convention, camelcase */
import * as qs from 'qs';
import { Inject, Injectable } from '@nestjs/common';
import { Config } from 'node-config-ts';

import { CONFIG } from '../../config/config.module';

import { AccountCheckArgs } from '../dto/account-check.args';

/**
 * Service to manage link
 */
@Injectable()
export class TinkLinkService {
  constructor(@Inject(CONFIG) private readonly config: Config) {}

  /**
   * Get a link to get a code authorization, to be able to access to all data
   */
  // eslint-disable-next-line class-methods-use-this
  public getAuthorizeLink(args: AccountCheckArgs, useTinkV2?: boolean): string {
    if (useTinkV2 === true) {
      return `${this.config.tink.linkBaseUrl}/1.0/transactions/connect-accounts?${qs.stringify(args)}`;
    } else {
      return `${this.config.tink.linkBaseUrl}/1.0/authorize?${qs.stringify(args)}`;
    }
  }
}

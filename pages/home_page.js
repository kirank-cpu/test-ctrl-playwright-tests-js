import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.clickOnBackpackLocator = page.locator(`#add-to-cart-sauce-labs-backpack`);
    this.clickOnBikeLightLocator = page.locator(`#add-to-cart-sauce-labs-bike-light`);
    this.clickOnCartLinkLocator = page.locator(`a.shopping_cart_link`);
    this.clickOnMenuButtonLocator = page.locator(`#react-burger-menu-btn`);
    this.clickOnSideBarLinkLocator = page.locator(`#logout_sidebar_link`);
  }

  async clickOnBackpack() {
    // Click on backpack
    await this.clickOnBackpackLocator.click();
  }

  async clickOnBikeLight() {
    // Click on Bike light
    await this.clickOnBikeLightLocator.click();
  }

  async clickOnCartLink() {
    // Click on Cart link
    await this.clickOnCartLinkLocator.click();
  }

  async clickOnMenuButton() {
    // Click on menu button
    await this.clickOnMenuButtonLocator.click();
  }

  async clickOnSideBarLink() {
    // Click on Side bar link
    await this.clickOnSideBarLinkLocator.click();
  }

}

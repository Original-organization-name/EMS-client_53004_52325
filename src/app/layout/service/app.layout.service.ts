import { Injectable, effect, signal } from '@angular/core';
import { Subject } from 'rxjs';

interface LayoutState {
    staticMenuDesktopInactive: boolean;
    profileSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    state: LayoutState = {
        staticMenuDesktopInactive: false,
        profileSidebarVisible: false,
        staticMenuMobileActive: false,
    };

    private overlayOpen = new Subject<any>();

    overlayOpen$ = this.overlayOpen.asObservable();

    onMenuToggle() {
        if (this.isDesktop()) {
            this.state.staticMenuDesktopInactive =
                !this.state.staticMenuDesktopInactive;
        } else {
            this.state.staticMenuMobileActive =
                !this.state.staticMenuMobileActive;

            if (this.state.staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }

    showProfileSidebar() {
        this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
        if (this.state.profileSidebarVisible) {
            this.overlayOpen.next(null);
        }
    }

    isDesktop() {
        return window.innerWidth > 991;
    }
}

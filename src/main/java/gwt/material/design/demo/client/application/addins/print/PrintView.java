package gwt.material.design.demo.client.application.addins.print;

/*
 * #%L
 * GwtMaterial
 * %%
 * Copyright (C) 2015 - 2016 GwtMaterialDesign
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */


import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.addins.client.print.MaterialPrint;
import gwt.material.design.client.ui.MaterialColumn;
import gwt.material.design.client.ui.MaterialImage;
import gwt.material.design.client.ui.MaterialTitle;

import javax.inject.Inject;


public class PrintView extends ViewImpl implements PrintPresenter.MyView {
    interface Binder extends UiBinder<Widget, PrintView> {
    }

    @UiField
    MaterialTitle title;

    @UiField
    MaterialPrint btnPrint, btnImgPrint, btnPrintAdvance;

    @UiField
    MaterialImage img;

    @UiField
    MaterialImage advancePrint;

    @Inject
    PrintView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }

    @UiHandler("btnPrint")
    void onPrint(ClickEvent e) {
        btnPrint.print(title);
    }

    @UiHandler("btnImgPrint")
    void onImgPrint(ClickEvent e) {
        btnImgPrint.print(img);
    }

    @UiHandler("btnPrintAdvance")
    void onAdvancePrint(ClickEvent e) {
        btnPrintAdvance.print(advancePrint);
    }
}

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import { I18N } from "../../context/i18n";
import { ButtonMargin } from "../shared/Button";
import { ContainerColumn } from "../shared/ContainerColumn";
import { Form } from "../shared/Form";
import { Input } from "../shared/Input";
import { Label } from "../shared/Label";

export function LoginForm() {
    const { translate } = useContext(I18N);

    return (
        <Form>
            <ContainerColumn>
                <Label htmlFor="login">{translate('requestLoginUsername')}</Label>
                <Input id="login" type={'text'}></Input>
                <Label htmlFor="password">{translate('requestLoginPassword')}</Label>
                <Input id="password" type={'password'}></Input>
                <ButtonMargin>{translate('submitLogin')}</ButtonMargin>
            </ContainerColumn>
        </Form>
    )
}